/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [13156],
    {
      97235: (at, Ge, x) => {
        "use strict";
        x.r(Ge),
          x.d(Ge, {
            GameRecordingClipContent: () => js,
            default: () => Jl,
            useTimelineLoaderForCommunityClip: () => xs,
          });
        var f = x(7850),
          y = x(90626),
          Wt = x(68312),
          zt = x(88942),
          lt = x(35038),
          S = x(80613),
          m = x.n(S),
          r = x(75245);
        class P extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              P.prototype.representation_name || r.Sg(P.M()),
              S.Message.initialize(this, e, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
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
                    segment_info: { n: 11, c: G, r: !0, q: !0 },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = r.w0(P.M())), P.sm_mbf;
          }
          toObject(e = !1) {
            return P.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(P.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(P.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new P();
            return P.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(P.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(P.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingRepresentation";
          }
        }
        class j extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.component_name || r.Sg(j.M()),
              S.Message.initialize(this, e, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
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
                    representations: { n: 5, c: P, r: !0, q: !0 },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = r.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(j.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new j();
            return j.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(j.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(j.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingComponent";
          }
        }
        class $ extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $.prototype.steamid || r.Sg($.M()),
              S.Message.initialize(this, e, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
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
                    components: { n: 7, c: j, r: !0, q: !0 },
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
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(e = !1) {
            return $.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT($.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq($.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new $();
            return $.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj($.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0($.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingDef";
          }
        }
        class G extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.segment_number || r.Sg(G.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
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
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new G();
            return G.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentInfo";
          }
        }
        class R extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              R.prototype.segment_info || r.Sg(R.M()),
              S.Message.initialize(this, e, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
                  fields: {
                    segment_info: { n: 1, c: G },
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
                    request_headers: { n: 5, c: k, r: !0, q: !0 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(e = !1) {
            return R.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(R.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(R.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new R();
            return R.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(R.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(R.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo";
          }
        }
        class k extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              k.prototype.name || r.Sg(k.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    value: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(e = !1) {
            return k.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(k.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(k.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new k();
            return k.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(k.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(k.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
          }
        }
        class U extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              U.prototype.video_manager_clip_id || r.Sg(U.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
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
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(e = !1) {
            return U.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(U.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(U.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new U();
            return U.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(U.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(U.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideoManagerClipID";
          }
        }
        class N extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              N.prototype.clip_id || r.Sg(N.M()),
              S.Message.initialize(this, e, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
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
                    video_ids: { n: 9, c: U, r: !0, q: !0 },
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
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(e = !1) {
            return N.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(N.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(N.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new N();
            return N.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(N.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(N.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClip";
          }
        }
        class _ extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _.prototype.clip || r.Sg(_.M()),
              S.Message.initialize(this, e, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip: { n: 2, c: N },
                    video_def: { n: 3, c: $, r: !0, q: !0 },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(e = !1) {
            return _.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(_.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(_.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new _();
            return _.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(_.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(_.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Request";
          }
        }
        class Y extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.clip || r.Sg(Y.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = { proto: Y, fields: { clip: { n: 1, c: N } } }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new Y();
            return Y.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Response";
          }
        }
        class J extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              J.prototype.clip_id || r.Sg(J.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(e = !1) {
            return J.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(J.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(J.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new J();
            return J.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(J.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(J.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Request";
          }
        }
        class gt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new gt();
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new gt();
            return gt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Response";
          }
        }
        class bt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.clip_id || r.Sg(bt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
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
          static toObject(e, i) {
            return r.BT(bt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new bt();
            return bt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(bt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(bt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Request";
          }
        }
        class mt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              mt.prototype.clip || r.Sg(mt.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = { proto: mt, fields: { clip: { n: 1, c: N } } }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = r.w0(mt.M())), mt.sm_mbf;
          }
          toObject(e = !1) {
            return mt.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(mt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(mt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new mt();
            return mt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(mt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(mt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Response";
          }
        }
        class dt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              dt.prototype.recording_id || r.Sg(dt.M()),
              S.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
                    segments_to_store: { n: 4, c: G, r: !0, q: !0 },
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
          static toObject(e, i) {
            return r.BT(dt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(dt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new dt();
            return dt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(dt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(dt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Request";
          }
        }
        class qt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              qt.prototype.segments_needed || r.Sg(qt.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    segments_needed: { n: 1, c: R, r: !0, q: !0 },
                    call_again: { n: 2, br: r.qM.readBool, bw: r.gp.writeBool },
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
          static toObject(e, i) {
            return r.BT(qt.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(qt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new qt();
            return qt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(qt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(qt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Response";
          }
        }
        class ie extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ie.prototype.recording_id || r.Sg(ie.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
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
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = r.w0(ie.M())), ie.sm_mbf;
          }
          toObject(e = !1) {
            return ie.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ie.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new ie();
            return ie.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Request";
          }
        }
        class ur extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ur.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ur();
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new ur();
            return ur.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Response";
          }
        }
        class Oe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.recording_id || r.Sg(Oe.M()),
              S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = r.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(Oe.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new Oe();
            return Oe.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(Oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(Oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
          }
        }
        class ze extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ze.prototype.segments_needed || r.Sg(ze.M()),
              S.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ze.sm_m ||
                (ze.sm_m = {
                  proto: ze,
                  fields: { segments_needed: { n: 1, c: R, r: !0, q: !0 } },
                }),
              ze.sm_m
            );
          }
          static MBF() {
            return ze.sm_mbf || (ze.sm_mbf = r.w0(ze.M())), ze.sm_mbf;
          }
          toObject(e = !1) {
            return ze.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ze.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new ze();
            return ze.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
          }
        }
        class ne extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.recording_id || r.Sg(ne.M()),
              S.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    segments_uploaded: { n: 2, c: G, r: !0, q: !0 },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = r.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, i) {
            return r.BT(ne.M(), e, i);
          }
          static fromObject(e) {
            return r.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new ne();
            return ne.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return r.zj(ne.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            r.i0(ne.M(), e, i);
          }
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Request";
          }
        }
        class pt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), S.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return pt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new pt();
          }
          static deserializeBinary(e) {
            let i = new (m().BinaryReader)(e),
              n = new pt();
            return pt.deserializeBinaryFromReader(n, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (m().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (m().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Response";
          }
        }
        var b;
        ((a) => {
          function e(o, u, c) {
            return o.SendMsg(
              "GameRecordingClip.CreateShareClip#1",
              (0, lt.I8)(_, u, c),
              Y,
              { ePrivilege: 1 },
            );
          }
          a.CreateShareClip = e;
          function i(o, u, c) {
            return o.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, lt.I8)(J, u, c),
              gt,
              { ePrivilege: 1 },
            );
          }
          a.DeleteSharedClip = i;
          function n(o, u, c) {
            return o.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, lt.I8)(bt, u, c),
              mt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          a.GetSingleSharedClip = n;
        })(b || (b = {}));
        var v;
        ((a) => {
          function e(u, c, d) {
            return u.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, lt.I8)(dt, c, d),
              qt,
              { ePrivilege: 1 },
            );
          }
          a.BeginGameRecordingSegmentsUpload = e;
          function i(u, c, d) {
            return u.SendMsg(
              "VideoClip.CommitGameRecordingSegmentsUpload#1",
              (0, lt.I8)(ie, c, d),
              ur,
              { ePrivilege: 1 },
            );
          }
          a.CommitGameRecordingSegmentsUpload = i;
          function n(u, c, d) {
            return u.SendMsg(
              "VideoClip.GetNextBatchOfSegmentsToUpload#1",
              (0, lt.I8)(Oe, c, d),
              ze,
              { ePrivilege: 1 },
            );
          }
          a.GetNextBatchOfSegmentsToUpload = n;
          function o(u, c, d) {
            return u.SendMsg(
              "VideoClip.CommitSegmentUploads#1",
              (0, lt.I8)(ne, c, d),
              pt,
              { ePrivilege: 1 },
            );
          }
          a.CommitSegmentUploads = o;
        })(v || (v = {}));
        var M = x(65946),
          B = x(14947);
        let F = null;
        function D(a) {
          if (F) {
            console.error("Attempt to set timeline marker hook a second time");
            return;
          }
          F = a;
        }
        function K(a, e) {
          return F
            ? F(a, e)
            : (console.error(
                "useGameMarkerFromID called in a context where the hook isn't defined.",
              ),
              null);
        }
        function W() {
          return window.g_GRS;
        }
        async function St(a, e, i) {
          if (!W()) {
            const [{ CGameRecordingStore: n }] = await Promise.all([
              x.e(90146).then(x.bind(x, 90146)),
            ]);
            i && D(i);
            let o = new n();
            await o.Init(a, e), (window.g_GRS = o);
          }
        }
        function vt() {
          if (W() != null) {
            const a = W();
            return {
              bLoading: a.BLoadingAppsWithBackgroundVideo(),
              rgApps: a.GetAppsWithBackgroundVideo(),
            };
          }
          return { bLoading: !1, rgApps: [] };
        }
        function je() {
          const [a, e] = (0, y.useState)(vt());
          return (0, y.useEffect)(() => (0, B.mJ)(vt, e), []), a;
        }
        function er(a) {
          const { bLoading: e, rgApps: i } = je();
          return {
            bLoading: e,
            app: (0, y.useMemo)(() => i.find((n) => n.game_id === a), [i, a]),
          };
        }
        function Er(a) {
          return W().GetTimelineLoaderForGame(a);
        }
        function Jr(a) {
          return W().GetTimelineLoaderForClip(a);
        }
        function cr(a) {
          return W().GetTimelineLoaderForSharedClip(a);
        }
        function jr(a) {
          return W() != null
            ? {
                bLoading: W()?.BLoadingClips(),
                rgClipHandles: W()?.GetClipIDs(a),
              }
            : { bLoading: !1, rgClipHandles: [] };
        }
        function Ur(a) {
          const [e, i] = useState(() => jr(a));
          return useEffect(() => (i(jr(a)), reaction(() => jr(a), i)), [a]), e;
        }
        function li(a) {
          return useObserver(() => W()?.GetClipSummaries(a));
        }
        function Fr(a) {
          return W()?.GetClipSummary(a);
        }
        function kr(a) {
          return W() != null && a ? W().GetClipSummariesForGame(a) || [] : [];
        }
        function oi(a) {
          return useObserver(() => W()?.GetClipSummary(a));
        }
        function Ps(a) {
          return useObserver(() =>
            a ? W()?.GetClipSummariesForGame(a) || [] : [],
          );
        }
        function Gi(a, e, i, n, o, u) {
          return W() != null
            ? W().LoadThumbnails(a, e, i, n, o, u ?? !0)
            : null;
        }
        function Un() {
          return W() != null ? { fnSaveClip: W().SaveClip } : {};
        }
        function Hn() {
          return W() != null ? { fnDeleteClip: W().DeleteClip } : {};
        }
        function Ws() {
          return W() != null ? { fnUploadClip: W().UploadClip } : {};
        }
        function Sr() {
          return W() != null
            ? {
                fnExportClip: W().ExportClip,
                fnUpdateExportPath: W().UpdateClipExportPath,
              }
            : {};
        }
        function Jt(a, e, i, n) {
          return W() != null ? W().TakeScreenshot(a, e, i.valMS, n) : null;
        }
        function Ze(a) {
          return useObserver(() => {
            if (W() != null) return W().GetClipExportProgress(a);
          });
        }
        function xe() {
          return useObserver(() => {
            if (W() != null) return W().GetCurrentExportingClip();
          });
        }
        function Pe() {
          return W() != null
            ? {
                fnStartRecording: W().StartRecording,
                fnStopRecording: W().StopRecording,
              }
            : {};
        }
        function We() {
          if (W() != null) return W().SwitchRecordedGame;
        }
        function Ee(a, e) {
          return W() != null
            ? W().RegisterManualRecordingCallback(a, e)
            : () => {};
        }
        function Fe() {
          return W() != null ? W().GetRecordingState() : null;
        }
        function se() {
          return W() != null
            ? {
                fnCreateUserTimelineMarkers: W().CreateUserTimelineMarkers,
                fnUpdateUserTimelineMarkers: W().UpdateUserTimelineMarkers,
                fnRemoveUserTimelineMarker: W().RemoveUserTimelineMarker,
              }
            : null;
        }
        function Ut(a, e) {
          return (0, M.q3)(() => {
            if (W() != null) return W().GetAchievementInfo(a, e);
          });
        }
        function qe() {
          return useObserver(() => {
            if (W() != null) return W().GetLastClip();
          });
        }
        function Je(a) {
          return W() != null ? W().GetBestClipTitle(a) : "";
        }
        function ke(a) {
          W() != null && W().ManuallyDeleteRecordingForApps(a);
        }
        function De(a, e) {
          const [i, n] = React.useState(0);
          return (
            useEffect(() => {
              W() != null &&
                W()
                  .GetTotalDiskSpaceUsage(a, e)
                  .then((o) => n(o));
            }, [a, e]),
            i
          );
        }
        function Br(a, e, i, n, o) {
          return W().ReportClipShare(a, e, i, n, o);
        }
        function ae(a, e, i, n, o) {
          return W().ReportClipRange(a, e, i, n, o);
        }
        function gr(a) {
          switch (a) {
            default:
            case 0:
              return StorageRecordings;
            case 1:
              return StorageClips;
            case 2:
              return StorageScreenshots;
          }
        }
        async function Le() {
          W() != null && (await W().CheckEnoughDiskSpace());
        }
        function Lt() {
          return (0, M.q3)(() => {
            if (W() != null) return !W().BEnoughDiskSpace();
          });
        }
        async function Ne() {
          return W() != null ? await W().GetAvailableDiskSpace() : 0;
        }
        async function le(a, e) {
          return await W().GetRecordingHighlights(a, e);
        }
        var ut = x(85443),
          ct = x(54963),
          Ht = x(95987),
          Yt = x(86578),
          Et = x(72604),
          Ft = x(85958),
          wt = x(13854),
          tt = x(86347),
          kt = x(41635),
          jt = x(89083),
          oe = x(8323),
          ue = Object.defineProperty,
          fr = Object.getOwnPropertyDescriptor,
          st = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? fr(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && ue(e, i, o), o;
          },
          Nt = ((a) => (
            (a[(a.None = 0)] = "None"),
            (a[(a.DownloadFailed = 1)] = "DownloadFailed"),
            (a[(a.PlaybackError = 2)] = "PlaybackError"),
            (a[(a.MediaTypeError = 3)] = "MediaTypeError"),
            a
          ))(Nt || {});
        class rt {
          m_elVideo = null;
          m_player = null;
          m_listeners = new oe.Ji();
          m_nDownloadFailureCount = 0;
          m_bInitailized = !1;
          m_bPaused = !1;
          m_bAtEnd = !1;
          m_strMediaTypeError = null;
          m_ePlayerError = 0;
          m_bUserInputNeeded = !1;
          m_bMuted = !1;
          m_bSeekReadyToPlay = !1;
          m_bVideoElementPlaying = !1;
          m_nPlaybackSpeed = 1;
          m_bIsWaiting = !0;
          m_bAutoPlay;
          m_bLoadedMetadata = !1;
          m_nPlaybackTime = 0;
          m_nVideoStartTime = 0;
          m_nVideoDuration = 0;
          m_nVolume = 1;
          m_eSeekType = jt.lU.Absolute;
          constructor(e) {
            (0, B.Gn)(this), (this.m_bAutoPlay = !!e);
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
            return this.m_eSeekType === jt.lU.Absolute
              ? this.m_nPlaybackTime
              : this.m_nPlaybackTime - this.m_nVideoStartTime;
          }
          GetTimelineDuration() {
            return this.m_eSeekType === jt.lU.Absolute
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
            return this.m_player?.GetMPDURL();
          }
          GetVideoElementCurrentTime() {
            return this.m_elVideo?.currentTime;
          }
          BVideoElementPlaying() {
            return this.m_bVideoElementPlaying;
          }
          BVideoElementWaiting() {
            return this.m_bIsWaiting;
          }
          GetVideoHeight() {
            return this.m_elVideo?.clientHeight || 0;
          }
          GetVideoWidth() {
            return this.m_elVideo?.clientWidth || 0;
          }
          GetLoadedMetadata() {
            return this.m_bLoadedMetadata;
          }
          Start(e, i, n, o = jt.lU.Absolute) {
            this.Stop(),
              (this.m_bAtEnd = !1),
              (this.m_elVideo = e),
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
              (this.m_player = new jt.Zn(this.m_elVideo)),
              this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
              this.m_player.PlayMPD(i),
              (this.m_bMuted = Ct("muted")),
              (this.m_nVolume = Ct("volume")),
              this.m_player.SetMuted(this.m_bMuted),
              this.m_player.SetVolume(this.m_nVolume),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_eSeekType = o);
            const u = `seeking_${i}_${n.toFixed(3)}`;
            (0, ut.q_)(`CGameRecordingVideo:: perf mark ${u}`),
              performance.mark(u),
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
            await this.m_player?.UpdateMPD();
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
              (0, ut.tG)("video playing");
          }
          OnVideoPause() {
            (this.m_bVideoElementPlaying = !1), (0, ut.tG)("video paused");
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
              (0, ut.tG)("video ended");
          }
          OnSeeking() {
            (0, ut.tG)("video on seeking"),
              (this.m_bVideoElementPlaying = !1),
              (this.m_bIsWaiting = !0),
              (this.m_bAtEnd = !1);
          }
          OnLoadedMetadata() {
            this.m_bLoadedMetadata = !0;
          }
          async OnDownloadFailed(e) {
            if (
              (e.detail || jt.N_.PlaybackError) == jt.N_.UnsupportedMediaType
            ) {
              (0, ut.ZI)("media type error"), (this.m_ePlayerError = 3);
              return;
            }
            (0, ut.ZI)("video download failed", e.detail),
              this.m_nDownloadFailureCount < 2
                ? (await this.m_player?.UpdateMPD(),
                  this.m_nDownloadFailureCount++)
                : (this.m_ePlayerError = 1);
          }
          OnPlaybackError() {
            (this.m_bVideoElementPlaying = !1),
              (0, ut.ZI)("video playback error"),
              (this.m_ePlayerError = 2);
          }
          OnUserInputNeeded() {
            (this.m_bUserInputNeeded = !0),
              !this.m_bMuted &&
                this.m_elVideo.autoplay &&
                ((0, ut.fX)(
                  "Failed to autoplay video. Muting and trying again.",
                ),
                this.SetMute(!0),
                this.Play());
          }
          OnVolumeChange() {
            (0, ut.tG)("volume change");
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
          SetVolume(e) {
            (this.m_nVolume = e),
              Gt("volume", e),
              e > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
              this.IsInitialized() && this.m_player.SetVolume(e);
          }
          SetMute(e, i) {
            this.IsInitialized() && this.m_player.SetMuted(e),
              (this.m_bMuted = e),
              i && Gt("muted", e);
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
          SetPlaybackSpeed(e) {
            (this.m_nPlaybackSpeed = e),
              this.IsInitialized() && (this.m_elVideo.playbackRate = e);
          }
          GetPlaybackSpeed() {
            return this.m_nPlaybackSpeed;
          }
          Seek(e) {
            if (!this.IsInitialized()) return;
            const i = `seeking_${this.m_player.GetMPDURL()}_${e.toFixed(3)}`;
            (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              performance.mark(i),
              (0, ut.q_)(`CGameRecordingVideo:: perf mark ${i}`),
              (0, ut.q_)(`CGameRecordingVideo::Seek to ${e}`),
              (this.m_nPlaybackTime = e),
              this.m_player.Seek(e, this.m_eSeekType);
          }
        }
        st([B.sH], rt.prototype, "m_bInitailized", 2),
          st([B.sH], rt.prototype, "m_bPaused", 2),
          st([B.sH], rt.prototype, "m_bAtEnd", 2),
          st([B.sH], rt.prototype, "m_strMediaTypeError", 2),
          st([B.sH], rt.prototype, "m_ePlayerError", 2),
          st([B.sH], rt.prototype, "m_bUserInputNeeded", 2),
          st([B.sH], rt.prototype, "m_bMuted", 2),
          st([B.sH], rt.prototype, "m_bSeekReadyToPlay", 2),
          st([B.sH], rt.prototype, "m_bVideoElementPlaying", 2),
          st([B.sH], rt.prototype, "m_nPlaybackSpeed", 2),
          st([B.sH], rt.prototype, "m_bIsWaiting", 2),
          st([B.sH], rt.prototype, "m_bLoadedMetadata", 2),
          st([B.sH], rt.prototype, "m_nPlaybackTime", 2),
          st([B.sH], rt.prototype, "m_nVideoStartTime", 2),
          st([B.sH], rt.prototype, "m_nVideoDuration", 2),
          st([B.sH], rt.prototype, "m_nVolume", 2),
          st([B.sH], rt.prototype, "m_eSeekType", 2),
          st([B.XI], rt.prototype, "Start", 1),
          st([B.XI], rt.prototype, "Stop", 1),
          st([ct.oI], rt.prototype, "OnCanPlay", 1),
          st([ct.oI], rt.prototype, "OnUserPauseChange", 1),
          st([ct.oI], rt.prototype, "OnVideoPlaying", 1),
          st([ct.oI], rt.prototype, "OnVideoPause", 1),
          st([ct.oI], rt.prototype, "OnVideoTimeUpdate", 1),
          st([ct.oI], rt.prototype, "OnVideoEnd", 1),
          st([ct.oI], rt.prototype, "OnSeeking", 1),
          st([ct.oI], rt.prototype, "OnLoadedMetadata", 1),
          st([ct.oI], rt.prototype, "OnDownloadFailed", 1),
          st([ct.oI], rt.prototype, "OnPlaybackError", 1),
          st([ct.oI], rt.prototype, "OnUserInputNeeded", 1),
          st([ct.oI], rt.prototype, "OnVolumeChange", 1),
          st([ct.oI], rt.prototype, "OnVideoWaiting", 1),
          st([ct.oI], rt.prototype, "UserInputReceived", 1);
        function ce(a, e) {
          return (0, ct.QS)((n) => (e(n), () => a()), [e]);
        }
        let $t;
        function Qt() {
          if (!$t) {
            let a = window.localStorage.getItem("gameRecordingPlayer") || "{}",
              e;
            try {
              e = JSON.parse(a);
            } catch {
              e = {};
            }
            $t = { muted: e.muted || !1, volume: e.volume || 1 };
          }
          return $t;
        }
        function Ct(a) {
          return Qt()[a];
        }
        function Gt(a, e) {
          let i = Qt();
          i[a] = e;
          let n = JSON.stringify(i);
          window.localStorage.setItem("gameRecordingPlayer", n);
        }
        const fe = 0,
          me = 1,
          Rt = 2,
          de = 3,
          _t = 4;
        function Ae(a) {
          const { app: e } = useRecordingActiveApp(a),
            { loader: i } = useTimelineLoaderForGame(a),
            n =
              e?.recording_type ===
                EGameRecordingType.k_EGameRecordingType_BackgroundRecording ||
              e?.recording_type ===
                EGameRecordingType.k_EGameRecordingType_ManualRecording,
            [o, u] = useState(null);
          if (
            (useEffect(
              () =>
                i
                  ? (u(
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
            useRerenderOnInterval({ msInterval: 1e3, bEnabled: !!o }),
            o)
          ) {
            const c = Date.now() - o.startTime + o.startDuration,
              d = i.GetTotalRecordingDuration();
            return Math.abs(c - d) > 1e4
              ? Math.floor(d / 1e3)
              : Math.floor(c / 1e3);
          }
          return i && i.BInitialized()
            ? Math.floor(i.GetTotalRecordingDuration() / 1e3)
            : e
              ? e.video_duration_seconds
              : 0;
        }
        var Dt = ((a) => (
          (a.NotRunning = "NotRunning"),
          (a.NotRecording = "NotRecording"),
          (a.ManualRecording = "ManualRecording"),
          (a.BackgroundRecording = "BackgroundRecording"),
          a
        ))(Dt || {});
        function te(a) {
          const { app: e } = er(a);
          if (!e) return "NotRecording";
          switch (e.recording_type) {
            default:
            case fe:
            case me:
              return "NotRecording";
            case Rt:
              return "ManualRecording";
            case de:
              return "BackgroundRecording";
          }
        }
        var Me = Object.defineProperty,
          be = Object.getOwnPropertyDescriptor,
          Tt = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? be(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && Me(e, i, o), o;
          },
          At = ((a) => (
            (a.Overlay = "Overlay"),
            (a.Clips = "Clips"),
            (a.Background = "Background"),
            (a.CommunityClip = "Community"),
            (a.ChatClip = "Chat"),
            (a.Partner = "Partner"),
            a
          ))(At || {}),
          mr = ((a) => (
            (a.Never = "Never"), (a.Always = "Always"), (a.Manual = "Manual"), a
          ))(mr || {});
        const ee = 3 * Ft.kh,
          dr = 5 * Ft.kh,
          he = Ft.kh + 2e3,
          Kt = 1e3;
        class ft {
          m_gameRecordingVideo = null;
          m_timelineLoader = null;
          m_fnUnregisterLoader = null;
          m_rgListeners = [];
          m_videoRef;
          m_bHidePlayer = !1;
          m_fnGetManifest;
          m_strRecordingID = null;
          m_nPendingSeekSec = -1;
          m_playbackDefinition = null;
          m_pendingStop = null;
          m_durationMS = (0, tt.Sb)(null);
          m_lastRecordingGlobalMS = (0, tt.Sb)(null);
          m_bWasLiveEdge = !1;
          m_nGlobalTimelinePlaybackMS = null;
          m_nGlobalTimelinePlaybackSec = null;
          m_fnUnregisterAutorun = [];
          m_eGameRecordingMode;
          m_rgSeekPerf = [];
          m_eRecordingState = Dt.NotRecording;
          m_eRecordingSetting = "Never";
          m_bGamepadMode = !1;
          m_bControlsVisible = !0;
          m_fnRenderGlyph = void 0;
          m_previousHighlightEntry = null;
          m_nextHighlightEntry = null;
          m_displayHighlightEntry = null;
          m_nRelativeTimeForDisplay = void 0;
          m_rgClipOffsets = [];
          m_phasePreview = void 0;
          constructor(e, i, n, o, u, c, d, h) {
            (0, B.Gn)(this),
              (this.m_fnGetManifest = i),
              (this.m_gameRecordingVideo = new rt(!0)),
              (this.m_eGameRecordingMode = n),
              (this.m_bGamepadMode = u),
              (this.m_playbackDefinition = d),
              o != null && (this.m_bControlsVisible = o),
              n === "Overlay" && (this.m_bHidePlayer = !0),
              h && this.SetClipOffsets(h),
              (this.m_fnRenderGlyph = c),
              this.m_fnUnregisterAutorun.push(
                (0, B.mJ)(
                  () => ({
                    bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
                    bIsPaused: this.m_gameRecordingVideo.IsPaused(),
                  }),
                  (g) => {
                    g.bIsAtEnd &&
                      !g.bIsPaused &&
                      this.PlayNextTimelineRecording();
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, B.mJ)(
                  () => this.m_gameRecordingVideo.GetPlaybackTime(),
                  (g) => {
                    if (
                      this.m_pendingStop &&
                      this.m_pendingStop.m_strRecordingID ==
                        this.m_strRecordingID &&
                      this.m_pendingStop.m_nOffsetMS <= g * 1e3
                    ) {
                      if (this.m_playbackDefinition?.m_nLoopDurationMS) {
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
                (0, B.mJ)(
                  () => ({
                    playback: this.m_gameRecordingVideo.GetPlaybackTime(),
                    bVideoPlaying:
                      this.m_gameRecordingVideo.BVideoElementPlaying(),
                  }),
                  (g) => {
                    if (g.bVideoPlaying) {
                      const w =
                        this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                          this.m_strRecordingID,
                          g.playback * 1e3,
                          0,
                        );
                      if (w)
                        this.UpdateGlobalPlayTime(w.nGlobalOffsetMS),
                          w.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                            this.m_eGameRecordingMode === "Overlay" &&
                            this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                            (console.log(
                              " hitting live edge, slow down the playback ",
                            ),
                            this.m_gameRecordingVideo.SetPlaybackSpeed(1));
                      else {
                        const O = this.GetLiveEdgeMS();
                        isNaN(O.valMS) ||
                          (this.SetPlaytimeFromGlobalMS(O),
                          this.FocusGlobalMS(O));
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, B.mJ)(
                  () => ({
                    globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
                    bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
                    bHidePlayer: this.m_bHidePlayer,
                  }),
                  (g) => {
                    if (!this.m_timelineLoader?.BInitialized()) return;
                    if (g.bHidePlayer) {
                      this.SetEntriesForLiveEdge();
                      return;
                    }
                    (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      (this.m_nextHighlightEntry?.globalMS &&
                        g.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      (this.m_previousHighlightEntry?.globalMS &&
                        g.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (g.bVideoPaused &&
                        this.m_previousHighlightEntry?.globalMS &&
                        g.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS + Kt)) &&
                      (this.CalculatePreviousHighlightEntry(
                        g.globalPlaybackMS,
                        g.bVideoPaused,
                      ),
                      this.CalculateNextHighlightEntry(
                        g.globalPlaybackMS,
                        g.bVideoPaused,
                      ));
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, B.mJ)(
                  () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
                  (g) => {
                    if (g) {
                      const w = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                      try {
                        const O = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                          z = performance.measure(O, w);
                        (0, ut.q_)(
                          `CGameRecordingVideo:: perf measure ${w} duration ${z.duration}`,
                        ),
                          z && this.m_rgSeekPerf.push(z.duration);
                      } catch (O) {
                        (0, ut.q_)(
                          `CGameRecordingVideo:: cant measure ${w}, error: ${O}`,
                        );
                      }
                    }
                  },
                  { fireImmediately: !0 },
                ),
              ),
              this.SetLoader(e);
          }
          AddEventListener(e) {
            return (
              this.m_rgListeners.push(e), () => kt.x9(this.m_rgListeners, e)
            );
          }
          FireEvent(e, ...i) {
            for (let n of this.m_rgListeners) {
              let o = n[e];
              o instanceof Function && o.apply(n, i);
            }
          }
          dispose() {
            this.m_fnUnregisterAutorun.forEach((e) => e()),
              this.m_fnUnregisterLoader &&
                (this.m_fnUnregisterLoader(),
                (this.m_fnUnregisterLoader = null));
          }
          SetVideoElement(e) {
            if (e) {
              if (this.m_videoRef === e) return;
              if (((this.m_videoRef = e), this.m_strRecordingID)) {
                const i =
                  this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
                (this.m_nPendingSeekSec = -1),
                  this.ChangePlaybackRecording(this.m_strRecordingID, i);
              } else this.TryPlayInitialTimelineVideo();
            } else this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null);
          }
          OnInvalidateRecording(e, i) {
            const n = this.m_fnGetManifest(i);
            this.m_gameRecordingVideo.GetMPDURL() == n &&
              ((0, ut.q_)(`Recording invalidated for ${i}. Reloading MPD`),
              this.m_gameRecordingVideo.UpdateMPD());
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              (this.m_bWasLiveEdge = !0),
              this.TryPlayInitialTimelineVideo();
            const e = kr(this.m_timelineLoader.GetGameID());
            this.SetClipOffsets(e);
          }
          OnInvalidate(e) {
            if (
              ((this.m_durationMS =
                this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(e))
            ) {
              this.SetEntriesForLiveEdge();
              return;
            }
            if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
              const i = this.m_timelineLoader.GetTimelineMetadataIndex(e),
                n = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_previousHighlightEntry.timelineID,
                ),
                o = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_nextHighlightEntry.timelineID,
                );
              if (i < n || i > o) return;
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
          OnTimelineLoaded(e) {
            this.m_previousHighlightEntry &&
              this.m_previousHighlightEntry.timelineID === e &&
              this.CalculatePreviousHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              ),
              this.m_nextHighlightEntry &&
                this.m_nextHighlightEntry.timelineID === e &&
                this.CalculateNextHighlightEntry(
                  this.m_nGlobalTimelinePlaybackMS,
                  this.GetGameRecordingVideo().IsPaused(),
                );
          }
          SetEntriesForLiveEdge() {
            const e = this.GetLiveEdgeMS();
            this.CalculatePreviousHighlightEntry(e.valMS, !0),
              (this.m_nextHighlightEntry = null);
          }
          CalculatePreviousHighlightEntry(e, i) {
            const n = i ? 1 : Kt * this.m_gameRecordingVideo.GetPlaybackSpeed(),
              o = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                e - n,
              );
            o.timelineState === "loaded" && !o.entry
              ? (this.m_previousHighlightEntry =
                  this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                    e,
                  ))
              : (this.m_previousHighlightEntry = o);
          }
          CalculateNextHighlightEntry(e, i) {
            const n =
              this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(e);
            if (n.timelineState === "loaded" && !n.entry) {
              const o = i
                ? 1
                : Kt * this.m_gameRecordingVideo.GetPlaybackSpeed();
              this.m_nextHighlightEntry =
                this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(
                  e - o,
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
          SetDisplayHighlightEntry(e, i) {
            this.m_displayHighlightEntry = { entry: e, duration: i };
          }
          GetPhasePreview() {
            return this.m_phasePreview;
          }
          SetPhasePreview(e) {
            this.m_phasePreview = e;
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
          SetClipOffsets(e) {
            if (!this.m_timelineLoader?.BInitialized()) return;
            let i = [];
            e &&
              e.length &&
              e.forEach((n) => {
                const o = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                  n.start_timeline_id,
                  0,
                );
                if (!o) return;
                const u = o.nGlobalOffsetMS + parseInt(n.start_offset_ms);
                i.push({
                  strClipID: n.clip_id,
                  nGlobalOffsetMS: u,
                  nDurationMS: parseInt(n.duration_ms),
                });
              }),
              (this.m_rgClipOffsets = i);
          }
          GetTotalMS() {
            return this.m_durationMS;
          }
          GetIsActiveTimeline(e) {
            return this.m_timelineLoader.IsActiveTimeline(e);
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
          SetHidePlayer(e) {
            e && (this.m_strRecordingID = null), (this.m_bHidePlayer = e);
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
          SetRecordingState(e) {
            this.m_eRecordingState = e;
          }
          GetLoader() {
            return this.m_timelineLoader;
          }
          SetLoader(e) {
            this.m_timelineLoader != e &&
              (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
              (this.m_timelineLoader = e),
              (this.m_fnUnregisterLoader =
                this.m_timelineLoader.AddEventListener(this)),
              e.BInitialized() && this.OnLoaderInitialized());
          }
          SetGetManifest(e) {
            this.m_fnGetManifest = e;
          }
          GetRecordingID() {
            return this.m_strRecordingID;
          }
          GetRecordingSetting() {
            return this.m_eRecordingSetting;
          }
          SetRecordingSetting(e) {
            this.m_eRecordingSetting = e;
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
            const e = this.m_rgSeekPerf.length,
              i = this.m_rgSeekPerf.reduce((c, d) => c + d) / e,
              n = Math.sqrt(
                this.m_rgSeekPerf
                  .map((c) => Math.pow(c - i, 2))
                  .reduce((c, d) => c + d) / e,
              ),
              o = Math.max(...this.m_rgSeekPerf),
              u = Math.min(...this.m_rgSeekPerf);
            return {
              nMean: i,
              nStdDev: n,
              nMax: o,
              nMin: u,
              nLength: e,
              nLastVal: this.m_rgSeekPerf[e - 1],
            };
          }
          async StartPlaybackForRange() {
            let i =
              this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                this.m_playbackDefinition.m_strTimelineID,
                0,
              )?.nGlobalOffsetMS || 0;
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
                let o = i + this.m_playbackDefinition.m_nLoopDurationMS,
                  u =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      o,
                    );
                this.m_pendingStop = {
                  m_strRecordingID: u.strRecordingID,
                  m_nOffsetMS: u.nRecordingOffsetMS,
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
                const e = this.GetLiveEdgeMS(),
                  i =
                    this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
                  n =
                    this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                      i,
                      0,
                      0,
                    );
                n && e.valMS < n.nGlobalOffsetMS
                  ? (this.UpdateGlobalPlayTime(n.nGlobalOffsetMS),
                    this.ChangePlaybackRecording(i, 0))
                  : isNaN(e.valMS) || this.SetPlaytimeFromGlobalMS(e, !1, !0);
              } else if (this.m_eGameRecordingMode === "Background") {
                const e =
                  this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
                this.SetPlaytimeFromRecordingOffset(e, 0);
              } else {
                const e = this.m_timelineLoader.GetFirstRecording();
                this.SetPlaytimeFromRecordingOffset(e, 0);
              }
          }
          GetTotalSeconds() {
            return Math.floor(
              this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
            );
          }
          GetCurrentPlaybackGlobalMS(e = 0) {
            const i =
              Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + e;
            return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              this.m_strRecordingID,
              i,
              0,
            );
          }
          GetIsLiveEdge() {
            const e = this.GetGlobalMSPlaytime().valMS || 0;
            return this.m_eGameRecordingMode === "Overlay"
              ? this.m_lastRecordingGlobalMS
                ? this.m_bWasLiveEdge
                : !1
              : this.GetTotalMS().valMS - e < 1;
          }
          GetLiveEdgeBufferWindowStartMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const e = Math.max(
                0,
                this.m_lastRecordingGlobalMS.valMS - ee - 1e3,
              );
              return (0, tt.Sb)(e);
            }
            return this.GetTotalMS();
          }
          GetLiveEdgeMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const e = Math.max(0, this.m_lastRecordingGlobalMS.valMS - he);
              return (0, tt.Sb)(e);
            }
            return (0, tt.Sb)(Math.max(0, this.GetTotalMS().valMS - 1));
          }
          GetTimelineAndOffsetRelativeToCurrentPlayback(e = 0) {
            const i = this.GetCurrentPlaybackGlobalMS(e);
            return (
              i ||
              ((0, ut.ZI)(
                `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
              ),
              null)
            );
          }
          SeekDeltaMS(e) {
            const i = this.GetGlobalMSPlaytime();
            if (!this.m_strRecordingID) {
              const u =
                e > 0
                  ? this.GetClosestNextRecordingForGlobalMS(i)
                  : this.GetClosestPreviousRecordingForGlobalMS(i);
              if (u) {
                const c = e > 0 ? e : Math.max(parseInt(u.duration_ms) + e, 0);
                this.SetPlaytimeFromRecordingOffset(u.recording_id, c, e < 0);
                return;
              }
            }
            const n =
                this.m_eGameRecordingMode === "Overlay"
                  ? this.GetLiveEdgeMS().valMS
                  : this.GetTotalMS().valMS,
              o = wt.OQ(i.valMS + e, 0, n - 1e3);
            this.SetPlaytimeFromGlobalMS((0, tt.Sb)(o));
          }
          ConvertGlobaOffsetToRecordingAndRelativeOffset(e) {
            return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              e,
            );
          }
          PlayNextTimelineRecording(e) {
            if (this.m_playbackDefinition?.m_nLoopDurationMS) {
              this.StartPlaybackForRange();
              return;
            }
            let i;
            if (
              (this.m_strRecordingID
                ? (i = this.m_timelineLoader.GetNextRecording(
                    this.m_strRecordingID,
                  ))
                : (i =
                    this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
                      (0, tt.Sb)(this.m_nGlobalTimelinePlaybackMS),
                    )?.recording_id),
              i)
            ) {
              this.SetPlaytimeFromRecordingOffset(i, 0);
              return;
            }
            this.m_gameRecordingVideo.Pause(),
              e && this.TryPlayInitialTimelineVideo();
          }
          GetClipsAtGlobalMS(e) {
            return (
              this.m_rgClipOffsets.filter(
                (i) =>
                  i.nGlobalOffsetMS <= e.valMS &&
                  i.nGlobalOffsetMS + i.nDurationMS >= e.valMS,
              ) || []
            );
          }
          GetClosestPreviousRecordingForGlobalMS(e) {
            return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
              e,
            );
          }
          GetClosestNextRecordingForGlobalMS(e) {
            return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
              e,
            );
          }
          SetPlaytimeFromRecordingOffset(e, i, n, o) {
            let u = i;
            n &&
              (u = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(
                e,
                i,
              ));
            const c =
              this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                e,
                u,
                0,
              );
            c &&
              (this.UpdateGlobalPlayTime(c.nGlobalOffsetMS),
              this.ChangePlaybackRecording(e, u / 1e3, o));
          }
          GetManifestFromRecordingID(e) {
            return this.m_fnGetManifest(e);
          }
          ChangePlaybackRecording(e, i = 0, n) {
            this.m_bHidePlayer = !1;
            const o = this.m_gameRecordingVideo.IsPaused();
            if (
              this.m_strRecordingID === e &&
              this.m_gameRecordingVideo.IsInitialized()
            ) {
              this.m_gameRecordingVideo.Seek(i);
              return;
            }
            if (
              (this.m_gameRecordingVideo.Stop(),
              (this.m_strRecordingID = e),
              !e)
            )
              return;
            if (!this.m_videoRef) {
              this.m_nPendingSeekSec = i;
              return;
            }
            const u = this.GetManifestFromRecordingID(e),
              c = this.m_timelineLoader.BRecordingHasZeroOffset(e)
                ? jt.lU.Absolute
                : jt.lU.FromAvailableStart;
            this.m_gameRecordingVideo.Start(this.m_videoRef, u, i, c),
              (n || o) && this.m_gameRecordingVideo.Pause();
          }
          StopPlayback() {
            this.m_gameRecordingVideo.Stop();
          }
          TogglePlayPause() {
            this.m_gameRecordingVideo.IsPaused() ||
            !this.m_gameRecordingVideo.IsInitialized()
              ? (this.m_nGlobalTimelinePlaybackMS >
                  (this.m_lastRecordingGlobalMS?.valMS ?? 0) &&
                  this.TryPlayInitialTimelineVideo(),
                this.m_gameRecordingVideo.GetTimelineDuration() -
                  this.m_gameRecordingVideo.GetPlaybackTime() <
                0.05
                  ? this.PlayNextTimelineRecording(!0)
                  : this.m_gameRecordingVideo.Play())
              : this.m_gameRecordingVideo.Pause();
          }
          GetGlobalMSPlaytime() {
            return (0, tt.Sb)(this.m_nGlobalTimelinePlaybackMS);
          }
          GetGlobalPlaytimeSec() {
            return this.m_nGlobalTimelinePlaybackSec;
          }
          UpdateGlobalPlayTime(e) {
            if (
              ((this.m_nGlobalTimelinePlaybackMS = e),
              (this.m_nGlobalTimelinePlaybackSec = Math.floor(e / 1e3)),
              this.m_lastRecordingGlobalMS &&
                this.m_lastRecordingGlobalMS.valMS !== null)
            ) {
              const i = this.m_bWasLiveEdge ? dr : ee;
              this.m_bWasLiveEdge =
                this.m_lastRecordingGlobalMS.valMS -
                  (this.GetGlobalMSPlaytime()?.valMS || 0) <
                i;
            }
          }
          HandleSeekToPreviousRecording(e, i, n) {
            const o = this.GetClosestPreviousRecordingForGlobalMS(e);
            if (o) {
              const u = parseInt(o.duration_ms),
                c = Math.max(u - 5e3, u * 0.75);
              n || (this.m_nRelativeTimeForDisplay = c / 1e3),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    o.recording_id,
                    c,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(o?.recording_id, c / 1e3, i);
            } else
              n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(0),
                this.ChangePlaybackRecording(this.m_strRecordingID, 0, i);
          }
          HandleSeekToNextRecording(e, i, n) {
            const o = this.GetClosestNextRecordingForGlobalMS(e);
            o
              ? (n || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    o.recording_id,
                    0,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(o?.recording_id, 0, i))
              : (n ||
                  (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
                this.ChangePlaybackRecording(
                  this.m_strRecordingID,
                  this.GetTotalMS().valMS / 1e3,
                  i,
                ));
          }
          SetPlaytimeFromGlobalMS(e, i, n, o) {
            this.m_pendingStop = null;
            let u =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                e.valMS,
              );
            u
              ? (n || (this.m_nRelativeTimeForDisplay = e.valMS),
                this.UpdateGlobalPlayTime(e.valMS),
                this.ChangePlaybackRecording(
                  u?.strRecordingID,
                  u?.nRecordingOffsetMS / 1e3,
                  i,
                ))
              : o
                ? this.ChangePlaybackRecording(
                    u?.strRecordingID,
                    u?.nRecordingOffsetMS / 1e3,
                    i,
                  )
                : e.valMS > this.m_nGlobalTimelinePlaybackMS
                  ? this.HandleSeekToNextRecording(e, i, n)
                  : this.HandleSeekToPreviousRecording(e, i, n);
          }
          ConvertGlobalOffsetToTimelineRelativeOffset(e) {
            return this.m_timelineLoader.GetTimelineOffsetFromGlobal(e, 0);
          }
          MakeRelativeToTimelineEndIfActive(e, i) {
            return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(
              e,
              i,
            );
          }
          GetTimelineDuration(e) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const i = this.m_timelineLoader.GetTimelineMetadata(e);
            return i ? parseInt(i.metadata.duration_ms) : null;
          }
          GetTimelineFirstRecordingOffset(e) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const i = this.m_timelineLoader.GetTimelineMetadata(e);
            if (!i) return null;
            const n = i.metadata.recordings;
            return n.length ? parseInt(n[0].start_offset_ms) : null;
          }
          async AddUserMarkerAtGlobalMS(e, i, n) {
            const o = this.m_timelineLoader.GetTimelineOffsetFromGlobal(
              e.valMS,
              0,
            );
            if (o) {
              const u = this.m_timelineLoader.GetGameID(),
                { fnCreateUserTimelineMarkers: c } = se(),
                d = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
                  o.strTimelineID,
                );
              Ht.y.ReportTrackedAction(i);
              const h = "steam_marker",
                g = await c(u, this.GetClipID(), {
                  timeline_id: o.strTimelineID,
                  entry_id: "",
                  time: "" + Math.floor(o.nTimelineOffsetMS.valMS + d),
                  type: Yt.Bw.jL,
                  marker_icon: h,
                  marker_priority: 0,
                });
              g.eResult == Et.R &&
                (this.m_timelineLoader.AddUserMarker(
                  o.strTimelineID,
                  Math.floor(o.nTimelineOffsetMS.valMS),
                  h,
                  g.entry_id,
                ),
                n && n(g.entry_id, o.strTimelineID));
            }
          }
          async RemoveUserMarker(e, i) {
            const { fnRemoveUserTimelineMarker: n } = se(),
              o = this.m_timelineLoader.GetGameID();
            return (await n(o, this.GetClipID(), e, i)) == Et.R
              ? (this.m_timelineLoader.RemoveUserMarker(e, i), !0)
              : ((0, ut.tG)(
                  `Failed to delete user marker for timeline ${e} entry ${i}`,
                ),
                !1);
          }
          async UpdateUserMarker(e, i, n, o) {
            const { fnUpdateUserTimelineMarkers: u } = se(),
              c = this.m_timelineLoader.GetGameID(),
              d = {
                timeline_id: e,
                entry_id: i.id,
                time: i.time,
                type: Yt.Bw.jL,
                marker_icon: i.icon,
                marker_priority: i.priority,
                range_title: n,
                marker_description: o,
              };
            if ((await u(c, this.GetClipID(), d)) == Et.R) {
              const g = {
                strIcon: i.icon,
                name: n,
                description: o,
                nTimelineOffsetMS: parseInt(i.time),
              };
              return this.m_timelineLoader.UpdateUserMarker(e, i.id, g), !0;
            }
            return !1;
          }
          FocusGlobalMS(e) {
            this.FireEvent("OnFocusGlobalMS", e);
          }
          SetPlaybackStop(e) {
            const i = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              e.valMS,
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
          GenerateClipNameFromTimeline(e, i, n, o) {
            return this.m_timelineLoader.GenerateClipNameFromTimeline(
              e,
              i,
              n,
              o,
            );
          }
          GetRenderGlyph() {
            if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
          }
          SetRenderGlyph(e) {
            this.m_fnRenderGlyph = e;
          }
          GetGamepadMode() {
            return this.m_bGamepadMode;
          }
          SetGamepadMode(e) {
            this.m_bGamepadMode = e;
          }
          GetControlsVisible() {
            return this.m_bControlsVisible;
          }
          SetControlsVisible(e) {
            e != null && (this.m_bControlsVisible = e);
          }
        }
        Tt([B.sH], ft.prototype, "m_bHidePlayer", 2),
          Tt([B.sH], ft.prototype, "m_strRecordingID", 2),
          Tt([B.sH], ft.prototype, "m_durationMS", 2),
          Tt([B.sH], ft.prototype, "m_lastRecordingGlobalMS", 2),
          Tt([B.sH], ft.prototype, "m_nGlobalTimelinePlaybackMS", 2),
          Tt([B.sH], ft.prototype, "m_nGlobalTimelinePlaybackSec", 2),
          Tt([B.sH], ft.prototype, "m_rgSeekPerf", 2),
          Tt([B.sH], ft.prototype, "m_eRecordingState", 2),
          Tt([B.sH], ft.prototype, "m_eRecordingSetting", 2),
          Tt([B.sH], ft.prototype, "m_bGamepadMode", 2),
          Tt([B.sH], ft.prototype, "m_bControlsVisible", 2),
          Tt([B.sH], ft.prototype, "m_fnRenderGlyph", 2),
          Tt([B.sH], ft.prototype, "m_previousHighlightEntry", 2),
          Tt([B.sH], ft.prototype, "m_nextHighlightEntry", 2),
          Tt([B.sH], ft.prototype, "m_displayHighlightEntry", 2),
          Tt([B.sH], ft.prototype, "m_nRelativeTimeForDisplay", 2),
          Tt([B.sH.ref], ft.prototype, "m_rgClipOffsets", 2),
          Tt([B.sH.ref], ft.prototype, "m_phasePreview", 2),
          Tt([ct.oI], ft.prototype, "SetVideoElement", 1),
          Tt([ct.oI], ft.prototype, "OnInvalidateRecording", 1),
          Tt([B.XI], ft.prototype, "OnLoaderInitialized", 1),
          Tt([ct.oI], ft.prototype, "OnInvalidate", 1),
          Tt([ct.oI], ft.prototype, "OnTimelineLoaded", 1),
          Tt([ct.oI], ft.prototype, "GetLiveEdgeMS", 1),
          Tt([ct.oI], ft.prototype, "StopPlayback", 1),
          Tt([ct.oI], ft.prototype, "TogglePlayPause", 1),
          Tt([B.XI], ft.prototype, "UpdateGlobalPlayTime", 1);
        const Vt = y.createContext({ timelinePlaybackCoordinator: null });
        function Ke(a) {
          const {
              children: e,
              mode: i,
              fnGetManifest: n,
              loader: o,
              recordingState: u,
              controlsVisible: c,
              gamepadMode: d,
              renderGlyph: h,
              recordingSetting: g,
              playbackDefinition: w,
              clipSummaries: O,
            } = a,
            [z] = y.useState(() => new ft(o, n, i, c, d, h, w, O));
          (0, y.useEffect)(() => {
            z.SetLoader(o);
          }, [z, o]),
            (0, y.useEffect)(() => {
              z.SetRecordingState(u);
            }, [z, u]),
            (0, y.useEffect)(() => {
              z.SetRecordingSetting(g);
            }, [z, g]),
            (0, y.useEffect)(() => {
              z.SetGetManifest(n);
            }, [z, n]),
            (0, y.useEffect)(() => {
              z.SetControlsVisible(c);
            }, [z, c]),
            (0, y.useEffect)(() => {
              z.SetGamepadMode(d);
            }, [z, d]),
            (0, y.useEffect)(() => {
              z.SetRenderGlyph(h);
            }, [z, h]),
            (0, y.useEffect)(() => {
              z.SetClipOffsets(O);
            }, [z, O]),
            (0, y.useEffect)(() => () => z.dispose(), [z]);
          const L = y.useMemo(() => ({ timelinePlaybackCoordinator: z }), [z]);
          return (0, f.jsx)(Vt.Provider, { value: L, children: e });
        }
        function C() {
          return (0, y.useContext)(Vt).timelinePlaybackCoordinator;
        }
        function vr() {
          return useContext(
            Vt,
          ).timelinePlaybackCoordinator.GetGameRecordingVideo();
        }
        function ye() {
          const a = C();
          return [
            (0, M.q3)(() => a?.GetPhasePreview() || null),
            (i) => a?.SetPhasePreview(i),
          ];
        }
        var X = x(36707),
          Se = x(64919),
          ht = x.n(Se),
          ot = x(18210),
          lr = x(57589),
          Mr = x(47689),
          Be = x(71742),
          ge = Object.defineProperty,
          ve = Object.getOwnPropertyDescriptor,
          we = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? ve(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && ge(e, i, o), o;
          };
        const Xe = 30;
        function br(a, e) {
          return (
            a.strRecordingID === e.strRecordingID &&
            a.strClipID === e.strClipID &&
            a.nRecordingOffsetMS === e.nRecordingOffsetMS &&
            a.nRecordingStartOffsetMS === e.nRecordingStartOffsetMS &&
            a.cPxMajorAxis === e.cPxMajorAxis &&
            a.bPreciseTiming == e.bPreciseTiming
          );
        }
        const re = class ai {
          k_QueueWaitUntilRequestMS = 10;
          k_nMaxBatchSize = 50;
          m_nMaxCacheSize = (Xe * 60 * 1e3) / Ft.kh;
          m_LRUTrackerSet = new Set();
          m_mapPromises = new Map();
          m_mapThumbnailImages = new Map();
          m_rgPendingRequest = new Array();
          m_PendingInfoPromise;
          m_PendingInfoResolve = void 0;
          m_PendingTimer = void 0;
          k_AlreadyResolvedOK = Promise.resolve(!0);
          m_rgThumbnailPerf = [];
          constructor() {
            (0, B.Gn)(this);
          }
          AddPerfMeasure(e) {
            this.m_rgThumbnailPerf.push(e);
          }
          GetPerfMeasures() {
            if (!this.m_rgThumbnailPerf.length) return null;
            const e = this.m_rgThumbnailPerf.length,
              i = this.m_rgThumbnailPerf.reduce((c, d) => c + d) / e,
              n = Math.sqrt(
                this.m_rgThumbnailPerf
                  .map((c) => Math.pow(c - i, 2))
                  .reduce((c, d) => c + d) / e,
              ),
              o = Math.max(...this.m_rgThumbnailPerf),
              u = Math.min(...this.m_rgThumbnailPerf);
            return {
              nMean: i,
              nStdDev: n,
              nMax: o,
              nMin: u,
              nLength: e,
              nLastVal: this.m_rgThumbnailPerf[e - 1],
            };
          }
          GetKey(e, i, n, o, u, c, d) {
            const h = u + o,
              g = d ? h : h - (h % Ft.kh);
            return `${e}_${i}_${n}_${g}_${c}_${d}`;
          }
          GetThumbnailData(e) {
            const i = this.m_mapThumbnailImages.get(e);
            return (
              i &&
                (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
                this.m_LRUTrackerSet.add(e)),
              i
            );
          }
          SetThumbnailData(e, i) {
            if (
              (this.m_LRUTrackerSet.has(e) && this.m_LRUTrackerSet.delete(e),
              this.m_LRUTrackerSet.add(e),
              this.m_mapThumbnailImages.set(e, i),
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
          GetThumbnail(e, i, n, o, u, c, d) {
            if (!i) return;
            const h = this.GetKey(e, i, n, o, u, c, d);
            return this.GetThumbnailData(h);
          }
          GetOrQueueThumbnail(e, i, n, o, u, c, d) {
            if (!i) return;
            const h = this.GetKey(e, i, n, o, u, c, d);
            let g = this.GetThumbnailData(h);
            if (!g) {
              let w = `thumbnail_${e}_${c}_${d}`;
              performance.mark(w),
                this.QueueThumbnailRequest(e, i, n, o, u, c, d).then(() => {
                  try {
                    const O = performance.measure(`measure_${w}`, w);
                    O && ai.Get().AddPerfMeasure(O.duration);
                  } catch (O) {
                    (0, ut.q_)(
                      `CThumbnailCache:: cant measure ${w}, error: ${O}`,
                    );
                  }
                }),
                (g = this.GetThumbnailData(h));
            }
            return g;
          }
          QueueThumbnailRequest(e, i, n, o, u, c, d) {
            const h = this.GetKey(e, i, n, o, u, c, d),
              g = this.GetThumbnailData(h);
            if (g && (g.data || g.bIsLoading)) return this.k_AlreadyResolvedOK;
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
                  (O) => (this.m_PendingInfoResolve = O),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                )));
            const w = {
              gameID: e,
              strRecordingID: i,
              strClipID: n,
              nRecordingOffsetMS: o,
              nRecordingStartOffsetMS: u,
              cPxMajorAxis: c,
              bPreciseTiming: d,
            };
            return (
              this.m_rgPendingRequest.some((O) => br(O, w)) ||
                (this.m_rgPendingRequest.push(w),
                this.m_mapPromises.set(h, this.m_PendingInfoPromise)),
              this.m_PendingInfoPromise
            );
          }
          async FlushPendingInfo() {
            if (typeof this.m_PendingInfoResolve > "u") return;
            const e = this.m_PendingInfoResolve,
              i = this.m_rgPendingRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              (this.m_rgPendingRequest = []),
              (this.m_PendingTimer = void 0),
              await this.InternalLoadMultipleThumbnails(i),
              e();
          }
          async InternalLoadMultipleThumbnails(e) {
            e.sort((i, n) => i.nRecordingOffsetMS - n.nRecordingOffsetMS);
            try {
              const i = e.map((o) => o.nRecordingOffsetMS * 1e3),
                n = await Gi(
                  e[0].strRecordingID,
                  e[0].strClipID,
                  void 0,
                  i,
                  e[0].cPxMajorAxis,
                  e[0].bPreciseTiming,
                );
              (0, Be.wT)(
                n?.length == i.length,
                `CThumbnailCache.InternalLoadMultipleThumbnails request ${i.length} and got back ${n?.length}`,
              );
              for (let o = 0; o < i.length && o < n?.length; ++o) {
                const u = e[o],
                  c = this.GetKey(
                    u.gameID,
                    u.strRecordingID,
                    u.strClipID,
                    u.nRecordingOffsetMS,
                    u.nRecordingStartOffsetMS,
                    u.cPxMajorAxis,
                    u.bPreciseTiming,
                  );
                let d = n ? n[o].image_data() : null;
                this.SetThumbnailData(c, { data: d, bIsLoading: !1 });
              }
            } catch (i) {
              (0, ut.ZI)("Failed to load multiple request thumbnails", i);
              for (let n = 0; n < e.length; ++n) {
                const o = e[n],
                  u = this.GetKey(
                    o.gameID,
                    o.strRecordingID,
                    o.strClipID,
                    o.nRecordingOffsetMS,
                    o.nRecordingStartOffsetMS,
                    o.cPxMajorAxis,
                    e[0].bPreciseTiming,
                  );
                this.SetThumbnailData(u, { data: null, bIsLoading: !1 });
              }
            }
          }
          async LoadThumbnail(e, i, n, o, u, c, d) {
            const h = this.GetKey(e, i, n, o, u, c, d),
              g = this.GetThumbnailData(h);
            return g && g.data
              ? !0
              : (this.m_mapPromises.has(h) ||
                  this.m_mapPromises.set(
                    h,
                    this.InternalLoadThumbnail(e, i, n, o, u, c, d),
                  ),
                this.m_mapPromises.get(h));
          }
          async InternalLoadThumbnail(e, i, n, o, u, c, d) {
            const h = this.GetKey(e, i, n, o, u, c, d);
            try {
              const g = await Gi(i, n, void 0, [o * 1e3], c, d);
              if (g?.length > 0) {
                let w = g ? g[0].image_data() : null;
                return (
                  this.SetThumbnailData(h, { data: w, bIsLoading: !1 }), !0
                );
              }
              (0, ut.tH)(
                `ThumbnailImage: got empty jpeg ${g.length} list back ${i} @ ${o}`,
              );
            } catch (g) {
              (0, ut.ZI)(
                `ThumbnailImage: Fail to load thumbnail ${i} @ ${o} with ${g}`,
              ),
                this.SetThumbnailData(h, { data: null, bIsLoading: !1 });
            }
            return !1;
          }
          static s_Singleton;
          static Get() {
            return (
              ai.s_Singleton || (ai.s_Singleton = new ai()), ai.s_Singleton
            );
          }
        };
        we([B.sH], re.prototype, "m_mapThumbnailImages", 2);
        let Zt = re;
        function hr(a) {
          const e = (0, y.useRef)(null),
            i = (0, ct.CH)(),
            n = (0, Mr.m)("useThumbnailAsURL");
          return (
            (0, y.useEffect)(() => {
              if (a && !n?.token?.reason) {
                const o = new Blob([a], { type: "image/jpeg" }),
                  u = URL.createObjectURL(o);
                (e.current = u), i();
              }
              return () => {
                e.current &&
                  (URL.revokeObjectURL(e.current), (e.current = void 0));
              };
            }, [n?.token?.reason, a, i]),
            e.current
          );
        }
        function Te() {
          return Zt.Get().GetPerfMeasures();
        }
        function yr(a, e, i, n, o, u, c) {
          const d = (0, M.q3)(() =>
            Zt.Get().GetOrQueueThumbnail(a, i, e, n, o, u, c),
          );
          return hr(d?.data);
        }
        function Ue() {
          return Zt.Get().ClearThumbnailData();
        }
        var pe = x(98609),
          rr = x(56718),
          Ye = x(21196);
        const Xt = { nBeforeMS: 0, nAfterMS: 12e3 },
          xt = y.createContext({
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
        function pi(a) {
          const { children: e, loader: i } = a,
            [n, o] = React.useState(),
            [u, c] = React.useState(),
            [d, h] = React.useState(),
            [g, w] = React.useState(),
            O = React.useMemo(
              () => ({
                originalGlobalMS: 0,
                originalRangeMethod: void 0,
                latestRangeMethod: void 0,
              }),
              [],
            ),
            [z, L] = React.useState({ ...O }),
            [A, H] = React.useState({ ...O }),
            [V, Z] = React.useState(),
            [it, et] = React.useState(),
            [nt, Mt] = React.useState(0),
            Ot = useTimelinePlaybackCoordinator(),
            ir = React.useCallback(() => {
              h(null),
                o(void 0),
                c(void 0),
                w(void 0),
                L(O),
                H(O),
                Ot.ClearPlaybackStop();
            }, [Ot, O]),
            or = React.useCallback((Ce) => {
              Z(Ce.valMS > 0 ? Ce : GlobalRelativeMS(0));
            }, []),
            $e = React.useCallback(
              (Ce) => {
                const sr = i.GetGlobalTimelineEndMS();
                et(Ce.valMS < sr.valMS ? Ce : sr);
              },
              [i],
            ),
            Ve = React.useCallback(
              (Ce, sr) => {
                or(Ce), $e(sr);
              },
              [$e, or],
            ),
            tr = React.useCallback(() => {
              Z(void 0), et(void 0);
            }, []),
            ii = React.useCallback(
              (Ce, sr) => {
                if (Ce !== void 0) {
                  let Ir = z ?? { ...O };
                  Ir.originalGlobalMS == 0 &&
                    ((Ir.originalRangeMethod = Ce),
                    (Ir.originalGlobalMS = sr.valMS)),
                    (Ir.latestRangeMethod = Ce),
                    L(Ir);
                }
                o(sr.valMS > 0 ? sr : GlobalRelativeMS(0));
              },
              [z, O],
            ),
            ni = React.useCallback(
              (Ce, sr) => {
                if (Ce !== void 0) {
                  let qr = A ?? { ...O };
                  qr.originalGlobalMS == 0 &&
                    ((qr.originalRangeMethod = Ce),
                    (qr.originalGlobalMS = sr.valMS)),
                    (qr.latestRangeMethod = Ce),
                    H(qr);
                }
                const Ir = i.GetGlobalTimelineEndMS();
                c(sr.valMS < Ir.valMS ? sr : Ir);
              },
              [i, A, O],
            ),
            si = React.useCallback(
              (Ce, sr, Ir) => {
                g == null && w(Ce), ii(Ce, sr), ni(Ce, Ir), tr();
              },
              [ni, ii, tr, g, w],
            ),
            vi = React.useCallback(() => {
              Mt(nt + 1);
            }, [Mt, nt]),
            wi = React.useCallback(() => {
              nt > 0 && Mt(nt - 1);
            }, [Mt, nt]);
          useEffect(() => () => ir(), [ir, i]);
          const Gl = React.useMemo(
            () => ({
              globalStartMS: n,
              globalPreviewStartMS: V,
              globalPreviewEndMS: it,
              globalEndMS: u,
              selectedMarker: d,
              eInitMethod: g,
              startMetrics: z,
              endMetrics: A,
              setStartMS: ii,
              setEndMS: ni,
              setRange: si,
              setPreviewRange: Ve,
              clearPreviewSelection: tr,
              setSelectedMarker: (Ce, sr, Ir, qr) => {
                h({ strEntryID: Ce, strTimelineID: sr }),
                  si(
                    EClipRangeMethod.k_EClipRangeMethod_Highlight,
                    GlobalRelativeMS(Math.max(0, Ir)),
                    GlobalRelativeMS(qr),
                  );
              },
              clearSelection: ir,
              selectionZoomCount: nt,
              zoomIntoSelection: vi,
              zoomOutSelection: wi,
            }),
            [n, V, it, u, d, g, z, A, ii, ni, si, Ve, tr, ir, nt, wi, vi],
          );
          return jsx(xt.Provider, { value: Gl, children: e });
        }
        function I() {
          const a = (0, y.useContext)(xt);
          return {
            nGlobalStartMS: a.globalStartMS,
            nGlobalEndMS: a.globalEndMS,
          };
        }
        function t() {
          const a = useContext(xt);
          return {
            eInitMethod: a.eInitMethod,
            startMetrics: a.startMetrics,
            endMetrics: a.endMetrics,
          };
        }
        function s() {
          const a = useContext(xt),
            e =
              a.globalStartMS !== void 0
                ? a.globalStartMS.valMS - a.startMetrics.originalGlobalMS
                : 0,
            i =
              a.globalEndMS !== void 0
                ? a.globalEndMS.valMS - a.endMetrics.originalGlobalMS
                : 0;
          return {
            eInitMethod: a.eInitMethod,
            startMetrics: {
              originalRangeMethod: a.startMetrics.originalRangeMethod,
              latestRangeMethod: a.startMetrics.latestRangeMethod,
              relativeMS: e,
            },
            endMetrics: {
              originalRangeMethod: a.endMetrics.originalRangeMethod,
              latestRangeMethod: a.endMetrics.latestRangeMethod,
              relativeMS: i,
            },
          };
        }
        function p() {
          return (0, y.useContext)(xt).globalStartMS;
        }
        function Yr() {
          return (0, y.useContext)(xt).globalEndMS;
        }
        function Ii() {
          return (0, y.useContext)(xt).setRange;
        }
        function Oi() {
          return (0, y.useContext)(xt).setStartMS;
        }
        function zi() {
          return (0, y.useContext)(xt).setEndMS;
        }
        function Qr() {
          const a = (0, y.useContext)(xt);
          return {
            selectedMarker: a.selectedMarker,
            setSelectedMarker: a.setSelectedMarker,
          };
        }
        function Hr() {
          const a = (0, y.useContext)(xt);
          return !isNaN(a.globalStartMS?.valMS) && !isNaN(a.globalEndMS?.valMS);
        }
        function ji() {
          return (0, y.useContext)(xt).clearSelection;
        }
        function Ri() {
          return useContext(xt).setPreviewRange;
        }
        function $n() {
          const a = useContext(xt);
          return {
            globalStartMS: a.globalPreviewStartMS,
            globalEndMS: a.globalPreviewEndMS,
          };
        }
        function Kn() {
          const a = useContext(xt);
          return (
            !isNaN(a.globalPreviewStartMS?.valMS) &&
            !isNaN(a.globalPreviewEndMS?.valMS)
          );
        }
        function Vn() {
          return useContext(xt).clearPreviewSelection;
        }
        function Zn() {
          const a = Ri(),
            e = useTimelinePlaybackCoordinator();
          return React.useCallback(() => {
            let n = e.GetCurrentPlaybackGlobalMS(0);
            if (n && n.strTimelineID) {
              let [o, u] = e
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalOffsetMS,
                  Xt.nBeforeMS,
                  Xt.nAfterMS,
                );
              a(GlobalRelativeMS(o), GlobalRelativeMS(u));
            }
          }, [e, a]);
        }
        function xi() {
          const a = Ii(),
            e = Oi(),
            i = zi(),
            n = I(),
            o = _i(),
            u = Pi();
          return y.useCallback(
            (d, h, g, w) => {
              if (g === void 0 && w === void 0) return;
              let O = n.nGlobalStartMS !== void 0 || n.nGlobalEndMS !== void 0,
                z = g || n.nGlobalStartMS,
                L = w || n.nGlobalEndMS;
              z &&
                L &&
                L.valMS <= z.valMS &&
                (g !== void 0 ? (L = void 0) : (z = void 0));
              const A = Xt.nBeforeMS + Xt.nAfterMS;
              z === void 0 && (z = (0, tt.Sb)(L.valMS - A)),
                L === void 0 && (L = (0, tt.Sb)(z.valMS + A));
              const H = z != n.nGlobalStartMS,
                V = L != n.nGlobalEndMS;
              H && V ? a(h, z, L) : H ? e(h, z) : V && i(h, L),
                !O && H && V && o == 0 && u();
            },
            [n, a, e, i, o, u],
          );
        }
        function Pi() {
          return (0, y.useContext)(xt).zoomIntoSelection;
        }
        function qn() {
          return useContext(xt).zoomOutSelection;
        }
        function _i() {
          return (0, y.useContext)(xt).selectionZoomCount;
        }
        function tn(a) {
          let e = (0, y.useContext)(xt),
            i = e.selectionZoomCount,
            n = e.globalStartMS,
            o = e.globalEndMS,
            u = (0, y.useRef)(i),
            c = (0, y.useRef)(null);
          (c.current = a),
            (0, y.useEffect)(() => {
              if (!c.current) return;
              let d = !isNaN(n?.valMS) && !isNaN(o?.valMS);
              (u.current == i && d) ||
                ((u.current = i),
                d && i ? c.current(n, o) : c.current(null, null));
            }, [i, n, o, u, c]);
        }
        var Re = x(34360),
          ui = x(16346),
          en = Object.defineProperty,
          rn = Object.getOwnPropertyDescriptor,
          He = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? rn(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && en(e, i, o), o;
          };
        const nn = 5e3,
          Wi = 300 * 1e3,
          sn = 1e3,
          an = 10,
          $r = 10;
        var Qe = ((a) => (
          (a.Playhead = "Playhead"),
          (a.RangeLeft = "RangeLeft"),
          (a.RangeRight = "RangeRight"),
          (a.Highlight = "Highlight"),
          a
        ))(Qe || {});
        class ln {
          m_fnUnregisterFromLoader;
          m_loader;
          m_maskBounds = [-1, -1];
          m_eventTarget;
          constructor(e, i) {
            (0, B.Gn)(this), (this.m_loader = e), (this.m_eventTarget = i);
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
          IsActiveRecording(e) {
            return this.m_loader.IsActiveRecording(e);
          }
          IsActiveTimeline(e) {
            return this.m_loader.IsActiveTimeline(e);
          }
          GetStateDescriptionAtGlobalMS(e) {
            return this.m_loader.GetStateDescriptionAtGlobalMS((0, tt.Sb)(e));
          }
          GetTimelineOffsetFromGlobal(e, i) {
            return this.m_loader.GetTimelineOffsetFromGlobal(e, i);
          }
          GetTimelineStartTime(e) {
            const i = this.m_loader.GetTimelineMetadata(e);
            return i?.metadata ? i.metadata.date_recorded : null;
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
          GetTimelineDataOrStartLoad(e) {
            return this.m_loader.GetTimelineDataOrStartLoad(e);
          }
          GetTimelineStartBeforeGlobalZeroMS(e) {
            return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(e);
          }
          MakeRelativeToTimelineEndIfActive(e, i) {
            return this.m_loader.MakeRelativeToTimelineEndIfActive(e, i);
          }
          FindRangeEventsAtGlobalMS(e) {
            return this.m_loader.FindRangeEventsAtGlobalMS(e);
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
          OnInvalidate(e) {
            this.m_eventTarget.OnInvalidate &&
              this.m_eventTarget.OnInvalidate(e);
          }
          OnTimelineLoaded(e) {
            this.m_eventTarget.OnTimelineLoaded &&
              this.m_eventTarget.OnTimelineLoaded(e);
          }
          OnInvalidateRecording(e, i) {
            this.m_eventTarget.OnInvalidateRecording &&
              this.m_eventTarget.OnInvalidateRecording(e, i);
          }
        }
        class Ie {
          m_playbackCoordinator;
          m_fnUnregisterPlaybackCoordinator;
          m_refTimelineParentCtn;
          m_timelineMask;
          m_durationMS = 0;
          m_mapTimelineClips = B.sH.map([], { deep: !1 });
          m_scrollLeftPX = 0;
          m_scrollWindowWidth = null;
          m_scrollWindowOffsetPX = null;
          m_bAutoScrollPaused = !1;
          m_autoScrollPauseTimeout = null;
          m_msVisible = 0;
          m_bCustomZoom = !1;
          m_bUserClipping = !1;
          m_prevLeftAndVisible = null;
          m_rgTimelineOffsets = [];
          m_mapTimelineEntries = B.sH.map([], { deep: !1 });
          m_bInitialized = !1;
          m_eThumbnailComponent = null;
          m_nGlobalRelativeThumbnailPositionPX = void 0;
          m_thumbnailHighlightEntry = void 0;
          m_phaseToHighlight = void 0;
          constructor(e, i, n) {
            (0, B.Gn)(this),
              (this.m_playbackCoordinator = i),
              (this.m_timelineMask = new ln(e, this)),
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
          OnTimelineLoaded(e) {
            if (
              ((0, ut.q_)("OnTimelineLoaded", e), !this.FindTimelineOffsets(e))
            ) {
              (0, ut.tG)("Missing timeline offset metadata for", e);
              return;
            }
            this.ComputeEntriesForTimeline(e);
          }
          OnInvalidate(e) {
            (0, ut.q_)("on invalidate", e);
            const i = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
              n = i - this.m_durationMS,
              o = this.m_durationMS <= 0;
            let u;
            this.m_durationMS = i;
            let c =
              this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
            if (n > 0 && o) this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n > 0 && !this.m_bAutoScrollPaused && !c)
              this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (n < 0 && this.m_msVisible > i)
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
                this.ScrollToOffset(0);
            else if (n < 0) {
              const g = this.FindClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX,
              );
              if (g) {
                const w = this.ConvertGlobalMSToGlobalPXOffset(
                    g.globalOffsetMS,
                  ),
                  O = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - w);
                u = { strTimelineID: g.timelineID, nTimelineOffsetMS: O };
              }
            }
            const d = this.m_timelineMask.GetTimelines();
            let h = 0;
            if (this.BInitialized() && e) {
              const g = d.findIndex((w) => w.metadata.timeline_id === e);
              g >= 0 && (h = g);
            }
            if (
              ((this.m_rgTimelineOffsets = d.map((g, w) =>
                w >= h
                  ? this.ComputeTimelineOffset(g)
                  : this.m_rgTimelineOffsets[w],
              )),
              u)
            ) {
              const g = this.FindTimelineOffsets(u.strTimelineID);
              if (g) {
                const w = g.globalOffsetMS + u.nTimelineOffsetMS,
                  O = (0, wt.OQ)(
                    this.ConvertGlobalMSToGlobalPXOffset(w),
                    0,
                    this.GetMaxScrollLeftPX(),
                  );
                this.ScrollToOffset(O);
              }
            }
            d.forEach((g, w) => {
              w >= h && this.ComputeEntriesForTimeline(g.metadata.timeline_id);
            });
          }
          OnFocusGlobalMS(e) {
            this.ScrollToCenteredGlobalMS(e.valMS);
          }
          GetGameID() {
            return this.m_timelineMask.GetGameID();
          }
          SetTimelineParentCtnRef(e) {
            this.m_refTimelineParentCtn = e;
          }
          GetTimelineParentCtnRef() {
            return this.m_refTimelineParentCtn;
          }
          SetThumbnailComponent(e) {
            (this.m_eThumbnailComponent = e),
              e || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
              e !== "Highlight" && (this.m_thumbnailHighlightEntry = null);
          }
          GetThumbnailComponent() {
            return this.m_eThumbnailComponent;
          }
          SetThumbnailPosition(e) {
            this.m_nGlobalRelativeThumbnailPositionPX = e;
          }
          GetThumbnailPosition() {
            return this.m_nGlobalRelativeThumbnailPositionPX;
          }
          SetThumbnailEntry(e) {
            this.m_thumbnailHighlightEntry = e;
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
            const e = this.GetTimelineMarginWidth() * 2,
              i = $r * (this.m_rgTimelineOffsets.length - 1),
              n = Math.max(1, this.m_scrollWindowWidth - i - e),
              o = Math.ceil(
                ((e + i) * this.m_durationMS) /
                  (this.m_scrollWindowWidth - (e + i)),
              ),
              u = sn * n;
            return Math.min(this.m_durationMS + o, u);
          }
          ZoomIn(e, i) {
            if (this.m_msVisible <= 1e3) return;
            const o = this.m_msVisible - this.m_msVisible / 1.1 ** e,
              u = o * i,
              c = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              d = Math.max(this.m_msVisible - o, 1e3);
            (this.m_msVisible = d),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(c + u));
          }
          ZoomOut(e, i) {
            const n =
              this.m_durationMS +
              this.ConvertDeltaPXToDurationMS(
                $r * (this.m_rgTimelineOffsets.length - 1) +
                  this.GetTimelineMarginWidth() * 2,
              );
            if (this.m_msVisible >= n) return;
            const o = this.m_msVisible * 1.1 ** e - this.m_msVisible,
              u = o * i,
              c = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              d = Math.min(this.m_msVisible + o, n);
            (this.m_msVisible = d),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(c - u));
          }
          IsTempZoom() {
            return !!this.m_prevLeftAndVisible;
          }
          SetTempZoomScale(e, i) {
            let n = Math.max(e, 0),
              o = Math.min(i, this.m_durationMS);
            (this.m_prevLeftAndVisible = [
              this.m_scrollLeftPX,
              this.m_msVisible,
            ]),
              (this.m_msVisible = o - n);
            const u = this.ConvertGlobalMSToGlobalPXOffset(n);
            this.ScrollToOffset(u);
          }
          ClearTempZoomScale() {
            if (!this.m_prevLeftAndVisible) return;
            const [e, i] = this.m_prevLeftAndVisible;
            (this.m_prevLeftAndVisible = null),
              this.ScrollToOffset(e),
              (this.m_msVisible = i);
          }
          SetUserIsClipping(e) {
            this.m_bUserClipping = e;
          }
          GetTimelineGapWidth() {
            return $r;
          }
          GetTimelineMarginWidth() {
            return 12;
          }
          UpdateClipSummaries(e = []) {
            this.m_mapTimelineClips.clear(),
              e.forEach((i) => {
                const n = i.start_timeline_id;
                this.m_mapTimelineClips.has(n) ||
                  this.m_mapTimelineClips.set(n, []);
                const o = {
                  clipID: i.clip_id,
                  msDuration: parseInt(i.duration_ms),
                  msTimelineOffset: parseInt(i.start_offset_ms),
                  timelineID: n,
                };
                this.m_mapTimelineClips.get(n).push(o);
              });
          }
          BEmpty() {
            return this.m_timelineMask.BEmpty();
          }
          ComputeTimelineOffset(e) {
            const i = isNaN(parseInt(e.metadata.duration_ms))
                ? 0
                : parseInt(e.metadata.duration_ms),
              n = e.metadata.recordings.map((c) => {
                const d = parseInt(c.start_offset_ms);
                let h = parseInt(c.duration_ms);
                return (
                  isNaN(h) &&
                    this.m_timelineMask.IsActiveRecording(c.recording_id) &&
                    (h = i - d),
                  {
                    recordingID: c.recording_id,
                    timelineOffsetMS: d,
                    nDurationMS: h,
                    bIsActive: this.m_timelineMask.IsActiveRecording(
                      c.recording_id,
                    ),
                    recordingType: c.recording_type,
                  }
                );
              }),
              u = (e.metadata.phases || []).map((c) => {
                const d = parseInt(c.background_timeline_offset),
                  h = parseInt(c.duration_ms);
                return { timelineOffsetMS: d, nDurationMS: h, phase: c };
              });
            return {
              timelineID: e.metadata.timeline_id,
              globalOffsetMS: e.nGlobalOffsetMS.valMS,
              nDurationMS: i,
              recordingOffsets: n,
              phaseOffsets: u,
            };
          }
          GetCurrentZoomScale() {
            return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
          }
          GetClipsForTimeline(e) {
            return this.m_mapTimelineClips.get(e) || [];
          }
          ComputeEntriesForTimeline(e) {
            const i = this.m_timelineMask.GetTimelineDataOrStartLoad(e);
            !i ||
              i.m_strState != "loaded" ||
              this.m_mapTimelineEntries.set(e, {
                rgGameModes: i.m_rgGameModeChanges,
                rgHighlights: i.m_rgEntries,
              });
          }
          GetVisibleTimelineGameModes(e) {
            return this.m_mapTimelineEntries.get(e)?.rgGameModes;
          }
          GetVisibleTimelineHighlights(e) {
            return this.m_mapTimelineEntries.get(e)?.rgHighlights;
          }
          GetStateDescriptionAtGlobalMS(e) {
            return this.m_timelineMask.GetStateDescriptionAtGlobalMS(e);
          }
          FindRangeEventsAtGlobalMS(e) {
            return this.m_timelineMask.FindRangeEventsAtGlobalMS(e);
          }
          GetTimelineOffsetMS(e) {
            return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(e);
          }
          ScrollToCenteredGlobalMS(e) {
            const i = this.ConvertGlobalMSToGlobalPXOffset(e);
            this.ScrollToOffsetCentered(i);
          }
          ScrollToOffset(e) {
            this.m_scrollLeftPX = (0, wt.OQ)(e, 0, this.GetMaxScrollLeftPX());
          }
          ScrollToOffsetCentered(e) {
            const i = Math.max(0, e - 0.5 * this.m_scrollWindowWidth);
            this.ScrollToOffset(i);
          }
          ScrollBy(e) {
            const i = this.m_scrollLeftPX + e;
            this.ScrollToOffset(i);
          }
          GetAutoScrollPaused() {
            return this.m_bAutoScrollPaused;
          }
          SetAutoScrollPaused(e) {
            this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = e);
          }
          GetAutoScrollPauseTimeout() {
            return this.m_autoScrollPauseTimeout;
          }
          ClearAutoScrollPauseTimeout() {
            this.m_autoScrollPauseTimeout &&
              clearTimeout(this.m_autoScrollPauseTimeout),
              (this.m_autoScrollPauseTimeout = null);
          }
          SetAutoScrollPauseTimeout(e = nn) {
            this.ClearAutoScrollPauseTimeout(),
              (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
                this.SetAutoScrollPaused(!1);
              }, e));
          }
          ScrollToEnd() {
            this.ScrollToOffset(this.GetMaxScrollLeftPX());
          }
          SetScrollWindowWidth(e) {
            (this.m_scrollWindowWidth = e),
              this.m_timelineMask.BInitialized() &&
                (this.ScrollToOffset(this.m_scrollLeftPX),
                this.InitDefaultsIfReady());
          }
          SetScrollWindowOffset(e) {
            this.m_scrollWindowOffsetPX = e;
          }
          GetScrollWindowOffset() {
            return this.m_scrollWindowOffsetPX;
          }
          GetScrollableWidthPX() {
            if (!this.m_rgTimelineOffsets?.length) return 0;
            const e = this.m_rgTimelineOffsets.length - 1,
              i = this.m_rgTimelineOffsets[e];
            return (
              e * $r +
              this.ConvertDurationMSToDeltaPX(i.globalOffsetMS + i.nDurationMS)
            );
          }
          GetOverscanWidth() {
            return (this.GetScrollWindowWidth() * an) / 100;
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
            const e = (0, wt.OQ)(
                this.m_scrollLeftPX,
                0,
                this.GetOverscanWidth(),
              ),
              i = Math.min(
                this.GetScrollableWidthPX() -
                  (this.m_scrollLeftPX + this.m_scrollWindowWidth),
                this.GetOverscanWidth(),
              );
            return e + this.m_scrollWindowWidth + i;
          }
          GetVirtualWindowEndPX() {
            return (
              this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX()
            );
          }
          GetVisibleTimelines() {
            const e =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.GetVirtualWindowStartPX(),
                ) + 1,
              i = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.GetVirtualWindowEndPX(),
              );
            return this.m_rgTimelineOffsets.slice(e, i + 1).map((n) => {
              const o = Math.max(
                  n.globalOffsetMS,
                  this.ConvertPXOffsetToGlobalMS(
                    this.GetVirtualWindowStartPX(),
                  ),
                ),
                u = Math.min(
                  n.nDurationMS - (o - n.globalOffsetMS),
                  this.ConvertDeltaPXToDurationMS(
                    this.GetVirtualWindowWidthPX(),
                  ),
                ),
                c = this.ConvertGlobalMSToGlobalPXOffset(o),
                d = this.ConvertDurationMSToDeltaPX(u),
                h = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
                g = this.ConvertDurationMSToDeltaPX(n.nDurationMS);
              return {
                ...n,
                pxStart: h,
                pxDuration: g,
                msVisibleStart: o,
                msVisibleDuration: u,
                pxVisibleStart: c,
                pxVisibleDuration: d,
              };
            });
          }
          GetVisibleRecordings() {
            const e = [];
            return (
              this.GetVisibleTimelines().forEach((i) => {
                i.recordingOffsets.forEach((n) => {
                  const o =
                      i.pxStart + this.GetPXForDuration(n.timelineOffsetMS),
                    u = o + this.GetPXForDuration(n.nDurationMS);
                  u < this.GetVirtualWindowStartPX() ||
                    o > this.GetVirtualWindowEndPX() ||
                    e.push({
                      recordingID: n.recordingID,
                      nStartPX: o,
                      nEndPX: u,
                      bIsActive: n.bIsActive,
                      recordingType: n.recordingType,
                    });
                });
              }),
              e
            );
          }
          GetVisibleClips() {
            const e = [];
            return (
              this.GetVisibleTimelines().forEach((i) => {
                const n = this.ConvertGlobalMSToGlobalPXOffset(
                  i.globalOffsetMS,
                );
                this.GetClipsForTimeline(i.timelineID).forEach((o) => {
                  const u = n + this.GetPXForDuration(o.msTimelineOffset),
                    c = Math.min(
                      this.GetVirtualWindowEndPX(),
                      this.ConvertGlobalMSToGlobalPXOffset(
                        i.globalOffsetMS + o.msTimelineOffset + o.msDuration,
                      ),
                    );
                  c < this.GetVirtualWindowStartPX() ||
                    u > this.GetVirtualWindowEndPX() ||
                    e.push({ clipID: o.clipID, pxClipStart: u, pxClipEnd: c });
                });
              }),
              e
            );
          }
          GetPXForDuration(e) {
            return e / this.GetCurrentZoomScale();
          }
          GetVisibleTimelinesInWindow() {
            const e =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.m_scrollLeftPX,
                ) + 1,
              i = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX + this.m_scrollWindowWidth,
              );
            return this.m_rgTimelineOffsets.slice(e, i + 1);
          }
          GetVisibleWindowRelativeTimelines() {
            return this.GetVisibleTimelinesInWindow().map((e) => {
              const i = this.m_scrollLeftPX,
                n = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
                o = this.ConvertGlobalMSToGlobalPXOffset(e.globalOffsetMS),
                u = o + this.ConvertDurationMSToDeltaPX(e.nDurationMS),
                c = Math.max(o, i),
                d = Math.min(u, n);
              return {
                timelineID: e.timelineID,
                nVisibleStartPX: c,
                nEndPX: d,
                nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(i),
                nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(i),
              };
            });
          }
          ConvertPXToTimelineRelativeMS(e, i = "start") {
            const n = this.ConvertPXOffsetToGlobalMS(e);
            let o = this.m_timelineMask.GetTimelineOffsetFromGlobal(n, 0);
            return i == "end-if-active" &&
              o.strTimelineID &&
              this.m_timelineMask.IsActiveTimeline(o.strTimelineID)
              ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
                  o.strTimelineID,
                  o.nTimelineOffsetMS.valMS,
                )
              : o.nTimelineOffsetMS.valMS;
          }
          GetTimeRecorded(e) {
            return this.m_timelineMask.GetTimelineStartTime(e);
          }
          ConvertGlobalMSToClipOrNone(e) {
            if (!this.m_timelineMask) return null;
            const i = this.m_timelineMask.GetTimelineOffsetFromGlobal(e, 0);
            if (!i) return null;
            const { nTimelineOffsetMS: n, strTimelineID: o } = i;
            return o && this.m_mapTimelineClips.has(o)
              ? this.m_mapTimelineClips
                  .get(o)
                  .find(
                    (c) =>
                      c.msTimelineOffset <= n.valMS &&
                      c.msTimelineOffset + c.msDuration >= n.valMS,
                  )
              : null;
          }
          ConvertGlobalMSToScrollWindowPXOffset(e) {
            return (
              this.ConvertGlobalMSToGlobalPXOffset(e) - this.m_scrollLeftPX
            );
          }
          ConvertGlobalMSToGlobalPXOffset(e, i = -1) {
            i < 0 &&
              (i = kt.rJ(
                this.m_rgTimelineOffsets,
                (o) => e - o.globalOffsetMS,
              ));
            const n = i * $r;
            return this.ConvertDurationMSToDeltaPX(e) + n;
          }
          ConvertPXOffsetToGlobalMS(e, i = !0) {
            if (this.BPositionInGap(e)) {
              if (!i) return null;
              const c = this.FindClosestTimelineEndForOffsetPX(e);
              return c ? c.globalOffsetMS + c.nDurationMS : 0;
            }
            const n = this.FindClosestTimelineStartForOffsetPX(e);
            if (!n) return null;
            const o = this.ConvertGlobalMSToGlobalPXOffset(n.globalOffsetMS),
              u = this.ConvertDeltaPXToDurationMS(e - o);
            return n.globalOffsetMS + u;
          }
          FindClosestTimelineEndForOffsetPX(e) {
            const i = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
            return i < 0 ? null : this.m_rgTimelineOffsets[i];
          }
          FindClosestTimelineStartForOffsetPX(e) {
            const i = this.FindIndexOfClosestTimelineStartForOffsetPX(e);
            return i < 0 ? null : this.m_rgTimelineOffsets[i];
          }
          FindIndexOfClosestTimelineEndForOffsetPX(e) {
            return kt.rJ(this.m_rgTimelineOffsets, (i) => {
              const o =
                this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS) +
                this.ConvertDurationMSToDeltaPX(i.nDurationMS);
              return e - o;
            });
          }
          FindIndexOfClosestTimelineStartForOffsetPX(e) {
            return kt.rJ(this.m_rgTimelineOffsets, (i) => {
              const n = this.ConvertGlobalMSToGlobalPXOffset(i.globalOffsetMS);
              return e - n;
            });
          }
          FindTimelineOffsets(e) {
            return this.m_rgTimelineOffsets.find((i) => i.timelineID === e);
          }
          BPositionInGap(e) {
            const i = this.FindIndexOfClosestTimelineEndForOffsetPX(e);
            if (i < 0) return !1;
            const n = i + 1;
            if (n >= this.m_rgTimelineOffsets.length) return !1;
            const o = this.m_rgTimelineOffsets[i],
              u = this.m_rgTimelineOffsets[n],
              c = this.ConvertGlobalMSToGlobalPXOffset(o.globalOffsetMS),
              d = this.ConvertGlobalMSToGlobalPXOffset(u.globalOffsetMS);
            return e < d && e !== c;
          }
          ConvertDurationMSToDeltaPX(e) {
            return e / this.GetCurrentZoomScale();
          }
          ConvertDeltaPXToDurationMS(e) {
            return e * this.GetCurrentZoomScale();
          }
          SetPhaseToHighlight(e) {
            this.m_phaseToHighlight = e;
          }
          GetPhaseToHighlight() {
            return this.m_phaseToHighlight;
          }
        }
        He([B.sH], Ie.prototype, "m_durationMS", 2),
          He([B.sH], Ie.prototype, "m_scrollLeftPX", 2),
          He([B.sH], Ie.prototype, "m_scrollWindowWidth", 2),
          He([B.sH], Ie.prototype, "m_scrollWindowOffsetPX", 2),
          He([B.sH], Ie.prototype, "m_bAutoScrollPaused", 2),
          He([B.sH], Ie.prototype, "m_autoScrollPauseTimeout", 2),
          He([B.sH], Ie.prototype, "m_msVisible", 2),
          He([B.sH.ref], Ie.prototype, "m_rgTimelineOffsets", 2),
          He([B.sH], Ie.prototype, "m_bInitialized", 2),
          He([B.sH], Ie.prototype, "m_eThumbnailComponent", 2),
          He([B.sH], Ie.prototype, "m_nGlobalRelativeThumbnailPositionPX", 2),
          He([B.sH], Ie.prototype, "m_thumbnailHighlightEntry", 2),
          He([B.sH], Ie.prototype, "m_phaseToHighlight", 2),
          He([B.XI], Ie.prototype, "OnLoaderInitialized", 1),
          He([B.XI], Ie.prototype, "InitDefaultsIfReady", 1),
          He([B.XI], Ie.prototype, "OnInvalidate", 1),
          He([B.XI], Ie.prototype, "ZoomIn", 1),
          He([B.XI], Ie.prototype, "ZoomOut", 1),
          He([B.XI], Ie.prototype, "SetTempZoomScale", 1),
          He([B.XI], Ie.prototype, "ClearTempZoomScale", 1),
          He([B.XI], Ie.prototype, "UpdateClipSummaries", 1),
          He([ct.oI], Ie.prototype, "BReachedMaxScroll", 1),
          He([ct.oI], Ie.prototype, "BReachedMinScroll", 1);
        const Ei = y.createContext(null);
        function on(a) {
          let {
              loader: e,
              playbackCoordinator: i,
              children: n,
              clipSummaries: o,
              refTimelineParentCtn: u,
            } = a,
            [c, d] = (0, y.useState)(null);
          return (
            (0, y.useEffect)(() => {
              if (!e) return;
              let h = new Ie(e, i, o);
              return d(h), () => h.Close();
            }, [e]),
            (0, y.useEffect)(() => {
              c && c.UpdateClipSummaries(o);
            }, [c, o]),
            (0, y.useEffect)(() => {
              c && u && c.SetTimelineParentCtnRef(u.current);
            }, [c, u]),
            cn(c),
            un(c),
            c ? (0, f.jsx)(Ei.Provider, { value: c, children: n }) : null
          );
        }
        function un(a) {
          let e = y.useCallback(
            (i, n) => {
              if (!a) return;
              if (!i || !n) {
                a.ClearTempZoomScale();
                return;
              }
              let o = Math.floor((n.valMS - i.valMS) * 0.1),
                u = n.valMS - i.valMS;
              u < Wi * 0.9 && (o = Math.floor((Wi - u) / 2));
              let c = i.valMS - o,
                d = n.valMS + o;
              a.SetTempZoomScale(c, d);
            },
            [a],
          );
          tn(e);
        }
        function cn(a) {
          let e = Hr();
          (0, y.useEffect)(() => {
            a && a.SetUserIsClipping(e);
          }, [a, e]);
        }
        function yt() {
          return (0, y.useContext)(Ei);
        }
        var q = x(20525),
          Pt = x(54637);
        const Fi = (0, y.createContext)({});
        function Jn(a) {
          const {
              children: e,
              onMarkerCreated: i,
              onNavigateToClip: n,
              onNavigateToScreenshot: o,
              onSetGamepadHeaderVisible: u,
              onShowProgressBar: c,
              onNavigateToGRSettings: d,
              onNavigateToMedia: h,
              onNavigateToFAQ: g,
              onShowError: w,
            } = a,
            O = useMemo(
              () => ({
                onMarkerCreated: i,
                onNavigateToClip: n,
                onNavigateToGRSettings: d,
                onNavigateToScreenshot: o,
                onSetGamepadHeaderVisible: u,
                onShowProgressBar: c,
                onNavigateToMedia: h,
                onNavigateToFAQ: g,
                onShowError: w,
              }),
              [n, i, o, u, c, d, h, g, w],
            );
          return jsx(Fi.Provider, { value: O, children: e });
        }
        function xr() {
          return (0, y.useContext)(Fi);
        }
        var Yn = x(36174),
          Nr = x(34843),
          fn = Object.defineProperty,
          mn = Object.getOwnPropertyDescriptor,
          Cr = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? mn(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && fn(e, i, o), o;
          };
        const dn = null;
        async function Qn(a, e, i, n, o) {
          const u = e.GetTimelineAndOffsetRelativeToCurrentPlayback(),
            c = e.GetTimelineAndOffsetRelativeToCurrentPlayback(dn);
          if (u && c) {
            const d = c.nGlobalOffsetMS - u.nGlobalOffsetMS,
              h = await e.GenerateClipNameFromTimeline(
                u.strTimelineID,
                u.nTimelineOffsetMS,
                c.strTimelineID,
                c.nTimelineOffsetMS,
              );
            return fi(
              a,
              e.GetClipID(),
              h,
              u.strTimelineID,
              u.nTimelineOffsetMS,
              c.strTimelineID,
              c.nTimelineOffsetMS,
              d,
              i,
              n,
              o,
            );
          } else LogWarning("Failed to determine time start/end for clip");
          return null;
        }
        async function Cn(a, e, i, n, o, u, c) {
          if (!isNaN(n) && !isNaN(i) && i < n) {
            const d = e.ConvertGlobalOffsetToTimelineRelativeOffset(i),
              h = e.ConvertGlobalOffsetToTimelineRelativeOffset(n);
            if (d && h) {
              const g = n - i,
                w = await e.GenerateClipNameFromTimeline(
                  d.strTimelineID,
                  d.nTimelineOffsetMS.valMS,
                  h.strTimelineID,
                  h.nTimelineOffsetMS.valMS,
                );
              return fi(
                a,
                e.GetClipID(),
                w,
                d.strTimelineID,
                d.nTimelineOffsetMS.valMS,
                h.strTimelineID,
                h.nTimelineOffsetMS.valMS,
                g,
                o,
                u,
                c,
              );
            } else
              LogWarning("Could not find the timeline for start or stop", d, h);
          } else LogWarning("Range not setup for creating the clip");
          return null;
        }
        class ci {
          m_bCreationWasTemporary;
          m_fnCreate;
          m_creationResult;
          m_bCleanedUp = !1;
          m_nClipLengthSeconds;
          m_strSuggestedClipName;
          m_strGameID;
          m_strSrcClipID;
          m_eInitMethod;
          m_startMetrics;
          m_endMetrics;
          constructor(e, i, n, o, u, c, d, h) {
            (this.m_fnCreate = e),
              (this.m_nClipLengthSeconds = i),
              (this.m_strSuggestedClipName = n),
              (this.m_strGameID = o),
              (this.m_strSrcClipID = u),
              (this.m_eInitMethod = c),
              (this.m_startMetrics = d),
              (this.m_endMetrics = h);
          }
          Request() {
            return {
              create: this.create,
              cleanup: this.cleanup,
              bExistingClip: !1,
              nClipLengthSeconds: this.m_nClipLengthSeconds,
              strSuggestedClipName: this.m_strSuggestedClipName,
              gameID: new Nr.VS(this.m_strGameID),
              strSrcClipID: this.m_strSrcClipID,
              eInitMethod: this.m_eInitMethod,
              startMetrics: this.m_startMetrics,
              endMetrics: this.m_endMetrics,
            };
          }
          async create(e, i) {
            return this.m_creationResult
              ? Promise.resolve(this.m_creationResult)
              : ((this.m_creationResult = await this.m_fnCreate(e, i)),
                (this.m_bCreationWasTemporary = e),
                ae(
                  new Nr.VS(this.m_strGameID),
                  this.m_eInitMethod,
                  this.m_nClipLengthSeconds,
                  this.m_startMetrics,
                  this.m_endMetrics,
                ),
                Promise.resolve(this.m_creationResult));
          }
          async cleanup() {
            if (this.m_bCleanedUp)
              throw new Error("cleanup called twice on clip creation");
            if (
              ((this.m_bCleanedUp = !0),
              this.m_creationResult?.clipSummary &&
                this.m_bCreationWasTemporary)
            ) {
              const { fnDeleteClip: e } = Hn();
              await e(this.m_creationResult.clipSummary.clip_id);
            }
          }
        }
        Cr([ct.oI], ci.prototype, "create", 1),
          Cr([ct.oI], ci.prototype, "cleanup", 1);
        function fi(a, e, i, n, o, u, c, d, h, g, w) {
          const O = (z, L) => Mn(a, e, i, n, o, u, c, z, L);
          return new ci(O, d / 1e3, i, a, e, h, g, w).Request();
        }
        function Gn(a) {
          const e = GetClipSummary(a);
          if (!e) return null;
          const i = GetGRS().GetClipExportProgress(a),
            n = parseInt(e.duration_ms) / 1e3,
            o = e.file_size ? (parseInt(e.file_size) * 8) / (1024 * n) : void 0;
          class u {
            m_bCreated = !1;
            async create(h) {
              return (
                this.m_bCreated ||
                  ((this.m_bCreated = !0),
                  ReportClipRange(
                    new CGameID(e.game_id),
                    EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    parseInt(e.duration_ms) / 1e3,
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
                Promise.resolve({ result: k_EResultOK, clipSummary: e })
              );
            }
            async cleanup() {
              return Promise.resolve();
            }
          }
          Cr([bind], u.prototype, "create", 1),
            Cr([bind], u.prototype, "cleanup", 1);
          let c = new u();
          return {
            create: c.create,
            cleanup: c.cleanup,
            nClipLengthSeconds: n,
            bExistingClip: !0,
            strSuggestedClipName: e.name,
            strCurrentExportPath: i?.exportPath,
            strSrcClipID: a,
            gameID: new CGameID(e.game_id),
            nEstimatedBitrateKbps: o,
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
        async function Mn(a, e, i, n, o, u, c, d, h) {
          const { fnSaveClip: g } = Un();
          (0, ut.tG)(`start ${n} @ ${o} upto ${u} @ ${c}`);
          try {
            const w = await g(
                a,
                e,
                i,
                { timeline_id: n, offset_ms: "" + o },
                { timeline_id: u, offset_ms: "" + c },
                d,
                h,
              ),
              { clipSummary: O, result: z } = w;
            return (
              O
                ? (0, ut.tG)(`Clip ${O.clip_id} created`)
                : (0, ut.tG)(`Clip was not created: ${z}`),
              w
            );
          } catch (w) {
            (0, ut.ZI)(w);
          }
          return { result: Et.zi };
        }
        const ki = 20,
          mi = "PhaseList";
        function bn(a) {
          const e = a.tags || {};
          return {
            filter_gameid: a.gameid,
            filter_search_string: a.strSearch || void 0,
            filter_tags: Object.keys(e).map((i) => ({ group: i, name: e[i] })),
            filter_phase_id: a.phaseID,
          };
        }
        function Rn(a = {}) {
          hn();
          const e = bn(a);
          return useInfiniteQuery({
            queryKey: [mi, "Query", e],
            queryFn: async (i) => {
              const o = (
                await GameRecordingService.QueryPhases({
                  count: ki,
                  page: i.pageParam,
                  ...e,
                })
              )
                .Body()
                .toObject();
              if (a.strSearch && a.strSearch.trim()) {
                const u = a.strSearch.toLowerCase();
                for (const c of o.phases)
                  for (const d of c.tags)
                    d.bFilterMatch = d.name.toLowerCase().indexOf(u) > -1;
              }
              return {
                ...o,
                nextPage: o.phases.length === ki ? i.pageParam + 1 : null,
              };
            },
            initialPageParam: 0,
            getNextPageParam: (i) => i.nextPage,
          });
        }
        function hn() {
          const a = useQueryClient();
          useEffect(() => {
            const e = () => (
                a.invalidateQueries({ queryKey: [mi] }), k_EResultOK
              ),
              i = GameRecordingService.RegisterForNotifyPhaseListChanged(e),
              n = GameRecordingService.RegisterForNotifyClipCreated(e),
              o = GameRecordingService.RegisterForNotifyClipDeleted(e);
            return () => {
              i.unregister(), n.unregister(), o.unregister();
            };
          }, [a]);
        }
        function _n(a) {
          return useQuery({
            queryKey: [mi, "GetTags", a],
            queryFn: async () => {
              const i = (await GameRecordingService.GetTags({ game_id: a }))
                  .Body()
                  .toObject().tags,
                { rgIconGroups: n } = Di(i);
              return n.sort((o, u) => u[0].priority - o[0].priority);
            },
          });
        }
        function Di(a) {
          const e = {};
          for (const o of a)
            e[o.group] || (e[o.group] = []), e[o.group].push(o);
          const i = [],
            n = [];
          for (const o of Object.values(e)) {
            const u = o.some(({ icon: c }) => !!c);
            o.sort((c, d) => d.priority - c.priority),
              u ? i.push(o) : n.push(...o);
          }
          return { rgIconGroups: i, rgTextOnlyTags: n };
        }
        function ts(a, e) {
          return useMemo(() => yn(a, e), [a, e]);
        }
        function yn(a = [], e = []) {
          const { rgIconGroups: i, rgTextOnlyTags: n } = Di(a),
            o = [
              ...e.map((c) => ({ type: "attribute", attribute: c })),
              ...i.map((c) => ({ type: "tags", tags: c })),
            ],
            u = (c) =>
              c.type === "attribute"
                ? c.attribute.priority
                : c.tags[0].priority;
          return o.sort((c, d) => u(d) - u(c)), { rgMetadata: o, rgDemoted: n };
        }
        function es(a) {
          return Li(a.date_recorded);
        }
        function Li(a) {
          const e = new Date(),
            i = new Date(a * 1e3),
            n = e.getFullYear() == i.getFullYear(),
            o = IsDateSameDay(e, i);
          let u = "";
          if (!o) {
            const g = {
              day: "numeric",
              month: "short",
              year: n ? void 0 : "numeric",
            };
            u = i.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              g,
            );
          }
          const c = { hour: "numeric", minute: "numeric" },
            d = i.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              c,
            ),
            h = u ? `${u} ${d}` : d;
          return { strDate: u, strTime: d, strDateTime: h };
        }
        function rs(a, e) {
          const i = new Date(),
            n = new Date(a * 1e3),
            o = new Date(e * 1e3),
            u = i.getFullYear() == o.getFullYear(),
            c = n.getFullYear() == o.getFullYear(),
            d = c && n.getMonth() == o.getMonth(),
            h = d && n.getDate() == o.getDate(),
            { strDateTime: g } = Li(a);
          let w = "";
          if (!h) {
            const L = {
              day: "numeric",
              month: d && u ? void 0 : "short",
              year: c ? void 0 : "numeric",
            };
            w =
              o.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                L,
              ) + " ";
          }
          const O = { hour: "numeric", minute: "numeric" },
            z = o.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              O,
            );
          return `${g} - ${w}${z}`;
        }
        function Sn(a, e, i, n) {
          const o = i + 1,
            u = o + n - 2;
          return fi(
            a,
            void 0,
            void 0,
            e,
            o,
            e,
            u,
            u - o,
            Ye.Ov.r8,
            {
              latestRangeMethod: Ye.Ov.r8,
              originalRangeMethod: Ye.Ov.r8,
              relativeMS: 0,
            },
            {
              latestRangeMethod: Ye.Ov.r8,
              originalRangeMethod: Ye.Ov.r8,
              relativeMS: 0,
            },
          ).create(!1);
        }
        var wr = x(82734),
          Bn = x(7450);
        const Ni = y.createContext({
          bInContainer: !1,
          bContainerFocus: !1,
          nMouseClientXPX: null,
          globalMouseXPX: null,
          scrollWindowMouseXPX: null,
          fnRegisterMouseEvent: null,
          bContextMenuOpen: !1,
          setContextMenuOpen: () => {},
        });
        function gn(a) {
          const { children: e } = a,
            [i, n] = (0, y.useState)(!1),
            [o, u] = (0, y.useState)(!1),
            [c, d] = (0, y.useState)(!1),
            [h, g] = (0, y.useState)(),
            w = (0, y.useRef)(void 0),
            O = yt(),
            z = (0, M.q3)(() => O.GetScrollableWidthPX()),
            L = (0, M.q3)(() => O.GetVisualWindowStartPX()),
            A = (0, M.q3)(() => O.GetScrollWindowWidth()),
            H = (0, M.q3)(() => O.GetScrollWindowOffset()),
            V = (0, M.q3)(() => O.GetTimelineMarginWidth()),
            Z = y.useMemo(() => {
              if (w.current) {
                const Ve = L - H - V;
                return (0, tt.OB)(wt.OQ(h + Ve, 0, z));
              }
              return (0, tt.OB)(0);
            }, [V, h, H, L, z]),
            it = y.useMemo(() => {
              if (w.current) {
                const Ve = w.current.getBoundingClientRect(),
                  tr = z > A ? H : Ve.x;
                return (0, tt.QP)(wt.OQ(h - tr, 0, A));
              }
              return (0, tt.QP)(0);
            }, [h, H, A, z]),
            et = (0, y.useCallback)(
              (Ve, tr) => (
                w.current && w.current.addEventListener(Ve, tr),
                () => w.current?.removeEventListener(Ve, tr)
              ),
              [],
            ),
            nt = (0, y.useCallback)(() => n(!0), []),
            Mt = (0, y.useCallback)(() => n(!1), []),
            Ot = (0, y.useCallback)((Ve) => g(Ve.clientX), []),
            ir = (0, y.useCallback)((Ve) => u(!0), []),
            or = (0, y.useCallback)((Ve) => u(!1), []);
          (0, y.useEffect)(() => {
            const Ve = (0, wr.qf)(w.current);
            return (
              Ve.addEventListener("mousemove", Ot),
              () => Ve.removeEventListener("mousemove", Ot)
            );
          }, [Ot]);
          const $e = (0, y.useMemo)(
            () => ({
              bContainerFocus: o,
              bInContainer: i,
              nMouseClientXPX: h,
              globalMouseXPX: Z,
              scrollWindowMouseXPX: it,
              fnRegisterMouseEvent: et,
              bContextMenuOpen: c,
              setContextMenuOpen: d,
            }),
            [o, i, c, h, Z, it, et],
          );
          return (0, f.jsx)(Ni.Provider, {
            value: $e,
            children: (0, f.jsx)("div", {
              ref: w,
              onMouseOver: ir,
              onFocus: ir,
              onMouseOut: or,
              onBlur: or,
              onMouseEnter: nt,
              onMouseLeave: Mt,
              className: Bn.MouseListenerContainer,
              children: e,
            }),
          });
        }
        function Dr() {
          return (0, y.useContext)(Ni);
        }
        function Gr() {
          return Dr().globalMouseXPX;
        }
        function di() {
          return Dr().scrollWindowMouseXPX;
        }
        function Ai() {
          return Dr().bInContainer;
        }
        function Mi() {
          return Dr().bContainerFocus;
        }
        function Xi() {
          const a = Dr();
          return [a.bContextMenuOpen, a.setContextMenuOpen];
        }
        function bi(a, e) {
          const i = Dr().fnRegisterMouseEvent,
            n = (0, y.useRef)(void 0),
            o = (0, y.useCallback)(() => {
              n.current = i(a, e);
            }, [i, e, a]),
            u = (0, y.useCallback)(() => {
              n.current && n.current();
            }, []);
          (0, y.useEffect)(() => (o(), () => u()), [o, u]);
        }
        function Ui() {
          const a = yt(),
            e = C(),
            i = xi(),
            n = (0, M.q3)(() => !e.ShouldModeShowClipControls()),
            o = Lt(),
            { onMarkerCreated: u, onNavigateToClip: c } = xr(),
            [d, h] = Xi();
          return y.useCallback(
            (w, O, z, L) =>
              n || o
                ? null
                : (0, ui.lX)(
                    (0, f.jsx)(vn, {
                      isCurrentPlayback: z,
                      nGlobalOffsetMS: O,
                      playbackCoordinator: e,
                      timelineView: a,
                      fnSetSelectionClipRange: i,
                      onMarkerCreated: u,
                      onNavigateToClip: c,
                      onContextMenuOpenChange: h,
                    }),
                    w,
                    L,
                  ),
            [n, o, e, a, i, u, c, h],
          );
        }
        function vn(a) {
          const {
              playbackCoordinator: e,
              timelineView: i,
              nGlobalOffsetMS: n,
              fnSetSelectionClipRange: o,
              isCurrentPlayback: u,
              onMarkerCreated: c,
              onNavigateToClip: d,
              onContextMenuOpenChange: h,
            } = a,
            g = (0, M.q3)(() => e.GetClipsAtGlobalMS(n)),
            w = Hi(i);
          (0, y.useEffect)(() => (h(!0), () => h(!1)), [h]);
          const z = (() => {
              const { strTimelineID: nt, nTimelineOffsetMS: Mt } =
                e.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS);
              if (!nt) return null;
              const Ot = e.GetLoader().GetTimelineData(nt);
              if (!Ot) return null;
              const ir = kt.rJ(
                Ot.m_rgPhases,
                ($e) => Mt.valMS - parseInt($e.time),
              );
              if (ir < 0) return null;
              const or = Ot.m_rgPhases[ir];
              return Mt.valMS >= parseInt(or.time) &&
                Mt.valMS <= parseInt(or.time) + parseInt(or.duration)
                ? { strTimelineID: nt, phase: or }
                : null;
            })(),
            L = (nt) => {
              const Mt = (Ot, ir) => {
                c && c(Ot, ir, nt);
              };
              e.AddUserMarkerAtGlobalMS(
                n,
                "/GameRecording/AddMarker/TimelineCtxMenu",
                Mt,
              ),
                e.SetPlaytimeFromGlobalMS(n),
                e.FocusGlobalMS(n);
            },
            A = () => {
              o(e, Ye.Ov.fo, n, void 0),
                e.SetPlaytimeFromGlobalMS(n),
                e.FocusGlobalMS(n);
            },
            H = () => {
              o(e, Ye.Ov.fo, void 0, n),
                e.SetPlaytimeFromGlobalMS(n),
                e.FocusGlobalMS(n);
            },
            V = () => {
              g.length > 0 &&
                (Ht.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
                ),
                d && d(g[0].strClipID));
            },
            Z = () => {
              const { strTimelineID: nt, nTimelineOffsetMS: Mt } =
                  e.ConvertGlobalOffsetToTimelineRelativeOffset(n.valMS),
                Ot = e.GetLoader().GetTimelineStartBeforeGlobalZeroMS(nt);
              Jt(e.GetGameID(), nt, Mt, e.GetClipID());
            },
            it = () => {
              if (!z) return;
              const { phase: nt, strTimelineID: Mt } = z;
              Sn(e.GetGameID(), Mt, parseInt(nt.time), parseInt(nt.duration));
            },
            et = (nt) => i.SetPhaseToHighlight(nt);
          return (
            (0, y.useEffect)(() => () => i.SetPhaseToHighlight(null), [i]),
            (0, f.jsxs)(Re.tz, {
              refInstance: w,
              children: [
                (0, f.jsx)(Re.kt, {
                  onSelected: L,
                  className: Pt.TimelineContextMenuItem,
                  children: (0, f.jsxs)("div", {
                    className: (0, X.A)(Pt.MenuItem, Pt.AddUserMarker),
                    children: [
                      (0, f.jsx)(q.pH, {}),
                      (0, ot.we)(
                        u
                          ? "#Playback_UserSelectionControls_AddUserMarker"
                          : "#TimelineDialog_AddMarker",
                      ),
                    ],
                  }),
                }),
                (0, f.jsx)(Re.kt, {
                  onSelected: Z,
                  className: Pt.TimelineContextMenuItem,
                  children: (0, f.jsxs)("div", {
                    className: (0, X.A)(Pt.MenuItem, Pt.TakeScreenshot),
                    children: [
                      (0, f.jsx)(q.i7, {}),
                      (0, ot.we)(
                        u
                          ? "#Playback_UserSelectionControls_TakeScreenshot"
                          : "#TimelineDialog_TakeScreenshot",
                      ),
                    ],
                  }),
                }),
                (0, f.jsx)(Re.kt, {
                  onSelected: A,
                  className: Pt.TimelineContextMenuItem,
                  children: (0, f.jsxs)("div", {
                    className: (0, X.A)(Pt.MenuItem, Pt.StartEndClip),
                    children: [
                      (0, f.jsx)(q.Nm, { direction: "left" }),
                      (0, ot.we)(
                        u
                          ? "#Playback_UserSelectionControls_SetClipStart"
                          : "#TimelineContext_SetClipStart",
                      ),
                    ],
                  }),
                }),
                (0, f.jsx)(Re.kt, {
                  onSelected: H,
                  className: Pt.TimelineContextMenuItem,
                  children: (0, f.jsxs)("div", {
                    className: (0, X.A)(Pt.MenuItem, Pt.StartEndClip),
                    children: [
                      (0, f.jsx)(q.Nm, { direction: "right" }),
                      (0, ot.we)(
                        u
                          ? "#Playback_UserSelectionControls_SetClipEnd"
                          : "#TimelineContext_SetClipEnd",
                      ),
                    ],
                  }),
                }),
                !!z &&
                  (0, f.jsx)(Re.kt, {
                    onSelected: it,
                    className: Pt.TimelineContextMenuItem,
                    onMouseOver: () => et([z.strTimelineID, z.phase.time]),
                    onMouseLeave: () => et(null),
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(Pt.MenuItem, Pt.ClipPhase),
                      children: [
                        (0, f.jsx)(q.O5, {}),
                        (0, ot.we)("#TimelineDialog_ClipPhase"),
                      ],
                    }),
                  }),
                g.length > 0 &&
                  (0, f.jsx)(Re.kt, {
                    onSelected: V,
                    className: Pt.TimelineContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(Pt.MenuItem, Pt.ViewClip),
                      children: [
                        (0, f.jsx)(rr.CeX, {}),
                        (0, ot.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function wn() {
          const a = C(),
            e = xi(),
            i = (0, M.q3)(() => !a.ShouldModeShowClipControls()),
            n = Lt(),
            { onMarkerCreated: o } = xr();
          return y.useCallback(
            (c, d) => {
              if (i || n) return;
              const h = (0, f.jsx)(Tn, {
                onMarkerCreated: o,
                playbackCoordinator: a,
                fnSetSelectionClipRange: e,
              });
              (0, ui.lX)(h, c, d);
            },
            [i, n, o, a, e],
          );
        }
        function Tn(a) {
          const { playbackCoordinator: e, fnSetSelectionClipRange: i } = a,
            n = (0, y.useRef)(void 0),
            { onMarkerCreated: o } = xr(),
            u = (g) => {
              const w = (z, L) => {
                  o && o(z, L, g);
                },
                O = e.GetGlobalMSPlaytime();
              e.AddUserMarkerAtGlobalMS(
                O,
                "/GameRecording/AddMarker/VideoCtxMenu",
                w,
              ),
                e.SetPlaytimeFromGlobalMS(O),
                e.FocusGlobalMS(O);
            },
            c = () => {
              const g = e.GetGlobalMSPlaytime();
              i(e, Ye.Ov.fo, g, void 0),
                e.SetPlaytimeFromGlobalMS(g),
                e.FocusGlobalMS(g);
            },
            d = () => {
              const g = e.GetGlobalMSPlaytime();
              i(e, Ye.Ov.fo, void 0, g),
                e.SetPlaytimeFromGlobalMS(g),
                e.FocusGlobalMS(g);
            },
            h = () => {
              const g = e.GetGlobalMSPlaytime(),
                { strTimelineID: w, nTimelineOffsetMS: O } =
                  e.ConvertGlobalOffsetToTimelineRelativeOffset(g.valMS),
                z = e.GetLoader().GetTimelineStartBeforeGlobalZeroMS(w);
              Jt(e.GetGameID(), w, O, e.GetClipID());
            };
          return (0, f.jsxs)(Re.tz, {
            refInstance: n,
            children: [
              (0, f.jsx)(Re.kt, {
                onSelected: u,
                className: Pt.TimelineContextMenuItem,
                children: (0, f.jsxs)("div", {
                  className: (0, X.A)(Pt.MenuItem, Pt.AddUserMarker),
                  children: [
                    (0, f.jsx)(q.Od, {}),
                    (0, ot.we)("#Playback_UserSelectionControls_AddUserMarker"),
                  ],
                }),
              }),
              (0, f.jsx)(Re.kt, {
                onSelected: h,
                className: Pt.TimelineContextMenuItem,
                children: (0, f.jsxs)("div", {
                  className: (0, X.A)(Pt.MenuItem, Pt.TakeScreenshot),
                  children: [
                    (0, f.jsx)(q.i7, {}),
                    (0, ot.we)(
                      "#Playback_UserSelectionControls_TakeScreenshot",
                    ),
                  ],
                }),
              }),
              (0, f.jsx)(Re.kt, {
                onSelected: c,
                className: Pt.TimelineContextMenuItem,
                children: (0, f.jsxs)("div", {
                  className: (0, X.A)(Pt.MenuItem, Pt.StartEndClip),
                  children: [
                    (0, f.jsx)(q.Nm, { direction: "left" }),
                    (0, ot.we)("#Playback_UserSelectionControls_SetClipStart"),
                  ],
                }),
              }),
              (0, f.jsx)(Re.kt, {
                onSelected: d,
                className: Pt.TimelineContextMenuItem,
                children: (0, f.jsxs)("div", {
                  className: (0, X.A)(Pt.MenuItem, Pt.StartEndClip),
                  children: [
                    (0, f.jsx)(q.Nm, { direction: "right" }),
                    (0, ot.we)("#Playback_UserSelectionControls_SetClipEnd"),
                  ],
                }),
              }),
            ],
          });
        }
        function Hi(a) {
          const e = (0, M.q3)(() => a.GetAutoScrollPauseTimeout()),
            i = (0, M.q3)(() => a.GetVisualWindowStartPX()),
            n = (0, y.useRef)(void 0),
            o = (0, y.useRef)(void 0);
          return (
            (0, y.useEffect)(() => {
              n.current && o.current ? o.current.Hide() : (n.current = !0);
            }, [i]),
            (0, y.useEffect)(() => {
              a.SetAutoScrollPaused(!0);
            }, [a]),
            (0, y.useEffect)(() => {
              e && a.ClearAutoScrollPauseTimeout();
            }, [e, a]),
            o
          );
        }
        var It = x(67721),
          pn = x(3166);
        const Rr = "steam_";
        var Lr = ((a) => (
          (a[(a.White = 0)] = "White"),
          (a[(a.Red = 1)] = "Red"),
          (a[(a.Orange = 2)] = "Orange"),
          (a[(a.Yellow = 3)] = "Yellow"),
          (a[(a.Green = 4)] = "Green"),
          (a[(a.Blue = 5)] = "Blue"),
          (a[(a.Purple = 6)] = "Purple"),
          (a[(a.Brown = 7)] = "Brown"),
          (a[(a.Gray = 8)] = "Gray"),
          a
        ))(Lr || {});
        function hi(a) {
          switch (a) {
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
        function is(a) {
          if (!a) return 0;
          const e = a.toLowerCase(),
            i = $i(Lr);
          for (const n of i) if (n.toLowerCase() == e) return Lr[n];
          return 0;
        }
        function ns(a) {
          return Lr[a].toLowerCase();
        }
        function $i(a) {
          return Object.keys(a).filter((e) => !Number.isNaN(e));
        }
        const In = $i(Lr).map((a) => Lr[a]);
        class Pr {
          m_mapSteamTimelineMarkers = new Map();
          GetMarkerByID(e) {
            const i = e.toLowerCase().startsWith(Rr)
              ? e.slice(Rr.length).toLowerCase()
              : e.toLowerCase();
            if (this.m_mapSteamTimelineMarkers.has(i))
              return this.m_mapSteamTimelineMarkers.get(i);
            const n = parseInt(i);
            return typeof n == "number" && n >= 0 && n <= 99
              ? { func: (o) => q.wN({ nNumber: n }), color: 8 }
              : Ki();
          }
          GetAllUseableMarkerID() {
            return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
              (e) => Rr + e,
            );
          }
          static s_Singleton;
          static Get() {
            return (
              Pr.s_Singleton ||
                ((Pr.s_Singleton = new Pr()), Pr.s_Singleton.Init()),
              Pr.s_Singleton
            );
          }
          AddMarker(e, i, n) {
            const o = n ?? 0;
            this.m_mapSteamTimelineMarkers.set(e, { func: i, color: o });
            for (const u of In) {
              const c = `${e}_${Lr[u]}`.toLowerCase();
              this.m_mapSteamTimelineMarkers.set(c, { func: i, color: u });
            }
          }
          Init() {
            this.AddMarker("explosion", q.Wq, 8),
              this.AddMarker("attack", q.LB, 8),
              this.AddMarker("defend", q.po, 8),
              this.AddMarker("combat", q.t4, 8),
              this.AddMarker("chest", q.k8, 8),
              this.AddMarker("view", q.Ss, 8),
              (0, pn.Y2)()
                ? this.AddMarker("death", q.X, 8)
                : this.AddMarker("death", q.lQ, 8),
              this.AddMarker("x", q.X, 8),
              this.AddMarker("plus", q.FW, 8),
              this.AddMarker("minus", q.Hs, 8),
              this.AddMarker("info", q.R2, 8),
              this.AddMarker("bolt", q.y$, 8),
              this.AddMarker("caution", q.eT, 8),
              this.AddMarker("completed", q.AY, 8),
              this.AddMarker("checkmark", q.MG, 8),
              this.AddMarker("effect", q.Mj, 8),
              this.AddMarker("purchase", q.QY, 8),
              this.AddMarker("ribbon", q.y4, 8),
              this.AddMarker("scroll", q.OY, 8),
              this.AddMarker("crown", q.Oe, 8),
              this.AddMarker("starburst", q.bL, 8),
              this.AddMarker("flag", q.lN, 8),
              this.AddMarker("cart", q.Z3, 8),
              this.AddMarker("timer", q.M4, 8),
              this.AddMarker("chat", q.ry, 8),
              this.AddMarker("wrench", q.Ml, 8),
              this.AddMarker("transfer", q.mr, 8),
              this.AddMarker("edit", q.ff, 8),
              this.AddMarker("bookmark", q.Xh, 8),
              this.AddMarker("invalid", q.WO, 8),
              this.AddMarker("star", q.FE, 8),
              this.AddMarker("circle", q.jl, 8),
              this.AddMarker("square", q.M6, 8),
              this.AddMarker("triangle", q.lM, 8),
              this.AddMarker("heart", q.B1, 8),
              this.AddMarker("diamond", q.JB, 8),
              this.AddMarker("gem", q.gD, 8),
              this.AddMarker("group", q.YJ, 8),
              this.AddMarker("pair", q.Rm, 8),
              this.AddMarker("single", q.KJ, 8),
              this.AddMarker("trophy", q.Oi, 8),
              this.AddMarker("achievement", q.Oi, 8),
              this.AddMarker("screenshot", q.pw, 8),
              this.AddMarker("bug", q.zP, 8),
              this.AddMarker("fix", q.Ml, 8),
              this.AddMarker("person", q.KJ, 8),
              this.AddMarker("question", q.O_, 8);
          }
        }
        function ss() {
          return Pr.Get().GetAllUseableMarkerID();
        }
        function yi(a) {
          return Pr.Get().GetMarkerByID(a);
        }
        function On() {
          return { func: q.pH, color: 5 };
        }
        function zn() {
          return { func: q.Oi, color: 0 };
        }
        function Ki() {
          return { func: q.pH, color: 8 };
        }
        function Vi(a) {
          return a && a.toLowerCase().startsWith(Rr);
        }
        var Wr = x(95896);
        function jn(a) {
          let {
            entry: e,
            strMarkerIcon: i,
            onClick: n,
            onMouseEnter: o,
            onMouseLeave: u,
            onContextMenu: c,
            classNames: d,
            style: h,
            faded: g,
            bSelectedMarker: w,
          } = a;
          return (0, f.jsx)("div", {
            style: h ?? {},
            className: (0, X.A)(d, {
              [Wr.HighlightIcon]: !0,
              [Wr.Selected]: w,
              [Wr.Faded]: g,
            }),
            onClick: (O) => {
              n && n(O);
            },
            onContextMenu: c,
            onMouseEnter: o,
            onMouseLeave: u,
            children: (0, f.jsx)(Si, { entry: e, strMarkerIcon: i }),
          });
        }
        function Si(a) {
          let { entry: e, strMarkerIcon: i } = a;
          const o = C().GetGameID();
          return (0, It.xz)(e)
            ? (0, f.jsx)(xn, { achievementEntry: e, strGameID: o })
            : (0, It.In)(e)
              ? (0, f.jsx)(T, {})
              : Vi(i)
                ? (0, f.jsx)(Pn, { entry: e, strMarkerIcon: i })
                : (0, f.jsx)(l, { strMarkerIcon: i, strGameID: o });
        }
        function xn(a) {
          const { achievementEntry: e, strGameID: i } = a,
            n = new Nr.VS(i),
            o = Ut(n.GetAppID(), e.achievement_name);
          let u, c;
          if (o) (u = "white"), (c = (0, f.jsx)("img", { src: o.iconURL }));
          else {
            const d = zn();
            (u = hi(d.color)), (c = d.func({}));
          }
          return (0, f.jsx)("div", {
            className: Wr.Marker,
            style: { color: u },
            children: c,
          });
        }
        function Pn(a) {
          const { entry: e, strMarkerIcon: i } = a;
          let n, o;
          (0, It.N$)(e) ? ((n = On()), (o = Wr.CustomMarker)) : (n = yi(i));
          const u = hi(n.color);
          return (0, f.jsx)(E, {
            color: u,
            children: (0, f.jsx)("div", { className: o, children: n.func({}) }),
          });
        }
        function Wn(a) {
          const { icon: e, className: i } = a;
          return yi(e).func({ className: i });
        }
        function T(a) {
          const e = yi("steam_invalid"),
            i = hi(e.color);
          return (0, f.jsx)(E, {
            color: i,
            children: (0, f.jsx)("div", { children: e.func({}) }),
          });
        }
        function l(a) {
          const { strMarkerIcon: e, strGameID: i } = a;
          return (0, f.jsx)(E, {
            children: (0, f.jsx)(Q, { icon: e, gameID: i }),
          });
        }
        function Q(a) {
          const { icon: e, gameID: i, className: n } = a,
            o = new Nr.VS(i).GetAppID(),
            u = K(o, e);
          if (Vi(e)) return (0, f.jsx)(Wn, { ...a });
          if (u === null) return null;
          if (u === void 0) {
            const d = Ki();
            return (0, f.jsx)("div", { className: n, children: d.func({}) });
          }
          let c = "";
          return (
            typeof u != "string"
              ? (c = new XMLSerializer().serializeToString(u))
              : (c = u),
            (0, f.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              className: (0, X.A)(n, Wr.GameMarkerSVG),
              children: (0, f.jsx)("g", {
                dangerouslySetInnerHTML: { __html: c },
              }),
            })
          );
        }
        function E(a) {
          const { children: e, color: i } = a;
          return (0, f.jsx)("div", {
            className: Wr.MarkerCtn,
            children: (0, f.jsx)("div", {
              className: Wr.Marker,
              style: i ? { color: i } : null,
              children: e,
            }),
          });
        }
        var Es = x(36890),
          Ar = x.n(Es);
        const Fs = parseInt(Ar().animationDuration);
        function ks() {
          const a = C(),
            e = (0, M.q3)(() => a.GetDisplayHighlightEntry()),
            [i, n] = (0, y.useState)(null),
            o = y.useRef(0);
          return (
            (0, y.useEffect)(() => {
              if (!e?.entry || (0, It.hT)(e.entry) || (0, It.Te)(e.entry)) {
                n(null);
                return;
              }
              return (
                n(e.entry),
                (o.current = window.setTimeout(
                  () => {
                    a.SetDisplayHighlightEntry(null);
                  },
                  e.duration ? e.duration : Fs,
                )),
                () => window.clearTimeout(o.current)
              );
            }, [e, a]),
            i ? (0, f.jsx)(Ds, { entry: i }) : null
          );
        }
        function Ds(a) {
          const { entry: e } = a,
            i = C(),
            n = (0, M.q3)(() => i.GetGameID()),
            o = i.GetGameRecordingVideo(),
            u = (0, M.q3)(() => i.GetRecordingID()),
            c = (0, M.q3)(() => o.IsInitialized()),
            d = o.GetVideoHeight(),
            h = o.GetVideoWidth(),
            g = u && c && d > 0 && h > 0 ? { height: d, width: h } : {};
          let w;
          return (
            (0, It.xz)(e)
              ? (w = (0, f.jsx)(Ls, { entry: e, strGameID: n }))
              : (0, It.N$)(e)
                ? (w = (0, f.jsx)(
                    Zi,
                    {
                      entry: e,
                      strMarkerIcon: e.icon,
                      title: e.title
                        ? e.title
                        : (0, ot.we)("#Marker_UserMarker_Title"),
                      description: e.description || "",
                    },
                    e.id,
                  ))
                : (0, It.sX)(e)
                  ? (w = (0, f.jsx)(
                      Zi,
                      {
                        entry: e,
                        strMarkerIcon: e.icon,
                        title: (0, ot.we)("#MediaManager_ItemType_Screenshot"),
                        description: "",
                      },
                      e.id,
                    ))
                  : (0, It.eJ)(e) &&
                    (w = (0, f.jsx)(
                      Zi,
                      {
                        entry: e,
                        strMarkerIcon: e.icon,
                        title: e.title || "",
                        description: e.description || "",
                      },
                      e.id,
                    )),
            (0, f.jsx)("div", {
              className: Ar().BannerVideoOverlay,
              style: g,
              children: w,
            })
          );
        }
        function Ls(a) {
          const { entry: e, strGameID: i } = a,
            n = new Nr.VS(i),
            o = Ut(n.GetAppID(), e.achievement_name);
          return o
            ? (0, f.jsx)(
                Zi,
                {
                  entry: e,
                  strMarkerIcon: "steam_achievement",
                  title: o.name ?? "",
                  description: o.description ?? "",
                },
                e.id,
              )
            : null;
        }
        function Zi(a) {
          const { entry: e, strMarkerIcon: i, title: n, description: o } = a;
          return (0, f.jsx)("div", {
            className: Ar().PlayerHighlightBanner,
            children: (0, f.jsxs)("div", {
              className: Ar().BannerContents,
              children: [
                (0, f.jsx)("div", {
                  className: Ar().HighlightIcon,
                  children: (0, f.jsx)(Si, { entry: e, strMarkerIcon: i }),
                }),
                (0, f.jsxs)("div", {
                  className: Ar().InfoBox,
                  children: [
                    n &&
                      (0, f.jsx)("div", {
                        className: Ar().HighlightTitle,
                        children: n,
                      }),
                    o &&
                      (0, f.jsx)("div", {
                        className: Ar().HighlightDesc,
                        children: o,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        var qi = x(19298),
          Tr = x(71421),
          Ns = x(24660),
          As = x(76970),
          En = x.n(As),
          Xr = x(92264);
        const Xs = parseInt(En().animationDuration);
        function Us() {
          const a = C(),
            e = a.GetGameRecordingVideo(),
            i = (0, M.q3)(() => a.GetRecordingID()),
            n = (0, M.q3)(() => e.IsInitialized()),
            o = e.GetVideoHeight(),
            u = e.GetVideoWidth(),
            c = i && n && o > 0 && u > 0 ? { height: o, width: u } : {},
            d = y.useRef(0),
            h = (0, M.q3)(() => a.GetRelativeTimeForDisplay()),
            g = (0, M.q3)(() => a.GetGameRecordingVideo().IsInitialized()),
            w = (0, y.useMemo)(() => {
              if (isNaN(h) || !g) return null;
              const O = a.ConvertGlobalOffsetToTimelineRelativeOffset(h);
              if (O && a.GetIsActiveTimeline(O.strTimelineID)) {
                const z = a.MakeRelativeToTimelineEndIfActive(
                  O.strTimelineID,
                  O.nTimelineOffsetMS.valMS,
                );
                return (0, Xr.dt)(z / 1e3, !1, !0);
              }
              return null;
            }, [g, h, a]);
          return (
            (0, y.useEffect)(() => {
              if (!isNaN(h))
                return (
                  (d.current = window.setTimeout(() => {
                    a.ClearRelativeTimeDisplay();
                  }, Xs)),
                  () => window.clearTimeout(d.current)
                );
            }, [h, a]),
            isNaN(h)
              ? null
              : (0, f.jsx)("div", {
                  className: En().RelativeTimeContainer,
                  style: c,
                  children: (0, f.jsx)(
                    "div",
                    { className: En().RelativeTime, children: w },
                    w,
                  ),
                })
          );
        }
        function Hs(a) {
          const {
              disableSound: e,
              positionAbsolute: i = !0,
              refVideoResize: n,
              style: o,
              fullscreen: u,
            } = a,
            c = C(),
            d = ce(c.StopPlayback, c.SetVideoElement),
            h = c.GetGameRecordingVideo(),
            g = (0, M.q3)(() => c.GetRecordingID()),
            w = (0, M.q3)(() => h.GetPlaybackError()),
            O = (0, M.q3)(() => c.GetRecordingMode() === "Overlay"),
            z = $s(),
            L = Hr(),
            A = w || !g,
            H = y.useRef(void 0);
          let V = (0, ct.Ue)(d, n);
          const Z = wn();
          function it() {
            g && c.TogglePlayPause();
          }
          function et() {
            g && u && u.fnToggleFullscreen();
          }
          const nt = y.useCallback(
              (or) => {
                A ||
                  Z(or, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  });
              },
              [A, Z],
            ),
            Ot = !pe.TS.IN_STEAMUI && !!a.autoPlay;
          let ir = (0, X.A)(
            ht().GameRecordingPlayer,
            A && ht().NoVideo,
            i && ht().PositionAbsolute,
            L && ht().ClippingMode,
            O && ht().Overlay,
            z && ht().PlayingClippedRegion,
          );
          return (0, f.jsxs)("div", {
            ref: H,
            className: ir,
            onClick: it,
            onContextMenu: nt,
            style: o,
            onDoubleClick: et,
            children: [
              (0, f.jsx)("video", {
                ref: V,
                controls: !1,
                muted: e,
                autoPlay: Ot,
                playsInline: Ot,
              }),
              (0, f.jsx)(qs, { player: h }),
              (0, f.jsx)(Ks, {}),
              (0, f.jsx)(Vs, {}),
              (0, f.jsx)(Zs, {}),
              !g && (0, f.jsx)(Js, {}),
              (0, f.jsx)(ks, {}),
              (0, f.jsx)(Us, {}),
            ],
          });
        }
        function $s() {
          const a = C(),
            e = (0, M.q3)(() => a.GetGlobalMSPlaytime()),
            { nGlobalEndMS: i, nGlobalStartMS: n } = I(),
            o = a.GetGameRecordingVideo();
          return (0, M.q3)(() => o.GetPlaybackError()) || !e || !n || !i
            ? !1
            : e.valMS >= n.valMS && e.valMS <= i.valMS;
        }
        function Ks() {
          const a = C(),
            e = lr.fi.Get().IsDebugLogEnabled("GR"),
            i = (0, M.q3)(() => a.GetPlaybackStats());
          return !e || !i
            ? null
            : (0, f.jsxs)("div", {
                className: ht().PerfCtnVideo,
                children: [
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "Average Seek MS: " }),
                      (0, f.jsx)("span", { children: i.nMean.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "StdDev Seek MS: " }),
                      (0, f.jsx)("span", { children: i.nStdDev.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "Slowest Seek MS: " }),
                      (0, f.jsx)("span", { children: i.nMax.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "Fastest Seek MS: " }),
                      (0, f.jsx)("span", { children: i.nMin.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "# Seeks: " }),
                      (0, f.jsx)("span", { children: i.nLength }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "Last Val: " }),
                      (0, f.jsx)("span", { children: i.nLastVal.toFixed(3) }),
                    ],
                  }),
                ],
              });
        }
        function Vs() {
          const a = lr.fi.Get().IsDebugLogEnabled("GR"),
            e = C(),
            i = (0, M.q3)(() => {
              e.GetGlobalMSPlaytime();
            }),
            n = Te();
          return !a || !n
            ? null
            : (0, f.jsxs)("div", {
                className: ht().PerfCtnThumbnails,
                children: [
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", {
                        children: "Avg Thumbnail Load MS: ",
                      }),
                      (0, f.jsx)("span", { children: n.nMean.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", {
                        children: "StdDev Thumbnail Load MS: ",
                      }),
                      (0, f.jsx)("span", { children: n.nStdDev.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", {
                        children: "Slowest Thumbnail Load MS: ",
                      }),
                      (0, f.jsx)("span", { children: n.nMax.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", {
                        children: "Fastest Thumbnail Load MS: ",
                      }),
                      (0, f.jsx)("span", { children: n.nMin.toFixed(3) }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "# Loaded: " }),
                      (0, f.jsx)("span", { children: n.nLength }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    children: [
                      (0, f.jsx)("span", { children: "Last Load: " }),
                      (0, f.jsx)("span", { children: n.nLastVal.toFixed(3) }),
                    ],
                  }),
                ],
              });
        }
        function Zs() {
          const a = C(),
            e = a.GetGameRecordingVideo(),
            i = e.GetVideoHeight(),
            n = (0, M.q3)(() => e.BVideoElementWaiting()),
            o = (0, M.q3)(() => e.IsPaused()),
            u = (0, M.q3)(() => e.GetPlaybackError()),
            c = (0, M.q3)(() => e.IsInitialized());
          return !(0, M.q3)(() => a.GetRecordingID()) || (c && !n) || u || o
            ? null
            : (0, f.jsx)("div", {
                className: ht().LoadingSpinner,
                style: { height: i },
                children: (0, f.jsx)(rr.y$y, {}),
              });
        }
        function qs(a) {
          const { player: e } = a,
            i = (0, M.q3)(() => e.GetPlaybackError());
          let n = "";
          switch (i) {
            case Nt.DownloadFailed:
            case Nt.PlaybackError:
            case Nt.MediaTypeError:
              n = "#GameRecording_PlayerError_Generic";
              break;
          }
          return n
            ? (0, f.jsx)("div", {
                className: ht().PlayerError,
                children: (0, f.jsx)("div", {
                  className: ht().Text,
                  children: (0, ot.we)(n),
                }),
              })
            : null;
        }
        function Js() {
          const a = C(),
            e = (0, M.q3)(() => a.GetGamepadMode()),
            { onNavigateToClip: i, onNavigateToFAQ: n } = xr(),
            o = (0, M.q3)(() => a.GetGlobalMSPlaytime()),
            u = a.GetClosestPreviousRecordingForGlobalMS(o),
            c = a.GetClosestNextRecordingForGlobalMS(o),
            d = (0, M.q3)(() => a.GetClipsAtGlobalMS(o)),
            h = (0, y.useCallback)(
              (O) => {
                if (u) {
                  const z = Math.max(parseInt(u.duration_ms) - 500, 0);
                  a.SetPlaytimeFromRecordingOffset(u.recording_id, z, !0, !0),
                    O.stopPropagation();
                }
              },
              [a, u],
            ),
            g = (0, y.useCallback)(
              (O) => {
                c &&
                  (a.SetPlaytimeFromRecordingOffset(c.recording_id, 0),
                  O.stopPropagation());
              },
              [a, c],
            ),
            w = (0, y.useCallback)(
              (O) => {
                d.length > 0 &&
                  (Ht.y.ReportTrackedAction(
                    "/GameRecording/Tooltip/ViewClip/PlayerNoContent",
                  ),
                  i(d[0].strClipID),
                  O.stopPropagation());
              },
              [d, i],
            );
          return (0, f.jsxs)("div", {
            className: ht().PlayerError,
            children: [
              (0, f.jsx)("div", {
                className: ht().Title,
                children: (0, ot.we)("#GameRecording_PlayerNoContent"),
              }),
              (0, f.jsx)("div", {
                className: ht().Description,
                children: (0, ot.oW)(
                  "#GameRecording_PlayerNoContentDescription",
                  (0, f.jsx)(Ns.Ii, { href: "#", onClick: n }),
                ),
              }),
              !e &&
                (0, f.jsxs)("div", {
                  className: ht().Buttons,
                  children: [
                    (0, f.jsx)(Tr.he, {
                      direction: "bottom",
                      toolTipContent: (0, ot.we)(
                        u
                          ? "#GameRecording_PlayerNoContentJumpPrevious_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, f.jsx)(qi.Z, {
                        className: (0, X.A)(
                          ht().Button,
                          ht().JumpPrevious,
                          !u && ht().DisableButton,
                        ),
                        onClick: h,
                        onActivate: h,
                        children: (0, ot.we)(
                          "#GameRecording_PlayerNoContentJumpPrevious",
                        ),
                      }),
                    }),
                    d.length > 0 &&
                      (0, f.jsx)(Tr.he, {
                        direction: "bottom",
                        toolTipContent: (0, ot.we)(
                          "#GameRecording_PlayerNoContentSeeClip_tooltip",
                        ),
                        children: (0, f.jsx)(qi.Z, {
                          onClick: w,
                          onActivate: w,
                          className: (0, X.A)(ht().Button, ht().GoToClip),
                          children: (0, ot.we)(
                            "#GameRecording_PlayerNoContentSeeClip",
                          ),
                        }),
                      }),
                    (0, f.jsx)(Tr.he, {
                      direction: "bottom",
                      toolTipContent: (0, ot.we)(
                        c
                          ? "#GameRecording_PlayerNoContentJumpNext_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, f.jsx)(qi.Z, {
                        className: (0, X.A)(
                          ht().Button,
                          ht().JumpNext,
                          !c && ht().DisableButton,
                        ),
                        onClick: g,
                        onActivate: g,
                        children: (0, ot.we)(
                          "#GameRecording_PlayerNoContentJumpNext",
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        var _e = x(8959),
          Bi = x(59254);
        const as = 20,
          Ys = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
          Qs = y.memo(function (e) {
            const i = yt(),
              n = (0, M.q3)(() => i.GetVisibleTimelines());
            return (0, f.jsx)(f.Fragment, {
              children: n.map((o) =>
                (0, f.jsx)(
                  Cs,
                  {
                    msVisibleStart: o.msVisibleStart,
                    pxVisibleDuration: o.pxVisibleDuration,
                    pxVisibleStart: o.pxVisibleStart,
                    msTimelineStart: o.globalOffsetMS,
                  },
                  o.timelineID,
                ),
              ),
            });
          }),
          Cs = y.memo(function (e) {
            const {
                msVisibleStart: i,
                msTimelineStart: n,
                pxVisibleDuration: o,
                pxVisibleStart: u,
              } = e,
              { msTickSpacing: c, pxTickSpacing: d } = Rs(),
              h = yt(),
              g = Math.ceil((i - n) / c),
              w = n + g * c,
              O = h.ConvertGlobalMSToGlobalPXOffset(w),
              z = (0, y.useMemo)(() => {
                const L = Math.ceil(o / d),
                  A = [];
                for (let H = 0; H < L; H++) {
                  const V = w + c * H,
                    Z = O + H * d,
                    it = `${V}`;
                  A.push({
                    key: it,
                    offsetPX: Z,
                    iTimelineRelativeTick: g + H,
                  });
                }
                return A;
              }, [o, d, w, c, O, g]);
            return z
              ? (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)("div", {
                      className: Bi.TimelineBacking,
                      style: { transform: `translateX(${u}px)`, width: o },
                    }),
                    z.map((L) =>
                      (0, f.jsx)(
                        Gs,
                        {
                          timelineRelativeIndex: L.iTimelineRelativeTick,
                          globalOffsetPX: L.offsetPX,
                        },
                        L.key,
                      ),
                    ),
                  ],
                })
              : null;
          });
        function Gs(a) {
          const { globalOffsetPX: e, timelineRelativeIndex: i } = a,
            o = i % as === 0 ? Bi.Major : Bi.Minor;
          return (0, f.jsx)("div", {
            className: Bi.TimeTick,
            style: { transform: `translateX(${e}px)` },
            children: (0, f.jsx)("div", {
              className: (0, X.A)(Bi.TickLine, o),
            }),
          });
        }
        function Rs() {
          const a = yt(),
            e = (0, M.q3)(() => a.GetCurrentZoomScale()),
            i = 300,
            n = (d) => Math.abs(i - d / e),
            u = Ys.reduce((d, h) => (n(d) - n(h) < 0 ? d : h)) / as,
            c = u / e;
          return { msTickSpacing: u, pxTickSpacing: c };
        }
        var Kr = x(23533);
        function _s(a, e) {
          return !(a.nStart >= e.nEnd || a.nEnd <= e.nStart);
        }
        class ta {
          m_reservations = [];
          m_nIconWidth;
          constructor(e) {
            this.m_nIconWidth = e;
          }
          BAllowIcon(e) {
            const i = {
              nStart: e - this.m_nIconWidth / 2,
              nEnd: e + this.m_nIconWidth / 2,
            };
            let n = 0;
            for (; n < this.m_reservations.length; n++) {
              const o = this.m_reservations[n];
              if (o.nStart >= i.nEnd) break;
              if (_s(i, o)) return !1;
            }
            return this.m_reservations.splice(n, 0, i), !0;
          }
        }
        var ar = x(41972),
          ls = x(73191),
          ea = x(2801),
          os = x(19316);
        function us(a) {
          const {
              closeModal: e,
              strTimelineID: i,
              entry: n,
              playbackCoordinator: o,
              fnClearSelection: u,
            } = a,
            [c, d] = y.useState(n.title || ""),
            [h, g] = y.useState(n.description || ""),
            w = (0, ls.vs)();
          return w.bLoading
            ? (0, f.jsx)(ls.Hh, {
                state: w,
                strDialogTitle: (0, ot.we)("#Marker_Dialog"),
                closeModal: e,
              })
            : (0, f.jsxs)(ea.o0, {
                strTitle: (0, ot.we)("#Marker_Dialog"),
                strMiddleButtonText: (0, ot.we)("#Marker_Action_Delete"),
                onCancel: e,
                onOK: async () => {
                  w.fnSetLoading(!0),
                    (await o.UpdateUserMarker(i, n, c, h))
                      ? e()
                      : (w.fnSetError(!0),
                        w.fnSetStrError((0, ot.we)("#Marker_UpdateFailed")));
                },
                children: [
                  (0, f.jsx)(os.pd, {
                    type: "text",
                    value: c,
                    onChange: (O) => d(O.currentTarget.value),
                    label: (0, ot.we)("#Marker_Title"),
                  }),
                  (0, f.jsx)(os.pd, {
                    type: "text",
                    value: h,
                    onChange: (O) => g(O.currentTarget.value),
                    label: (0, ot.we)("#Marker_Description"),
                  }),
                ],
              });
        }
        var cs = x(88003);
        function ra() {
          const a = yt(),
            e = C(),
            { setSelectedMarker: i } = Qr(),
            n = ji(),
            { onNavigateToClip: o, onNavigateToScreenshot: u } = xr(),
            c = Lt(),
            d = (0, M.q3)(() => !e.ShouldModeShowClipControls());
          return y.useCallback(
            (g, w, O) => {
              if (d) return;
              const z = (0, f.jsx)(ia, {
                markerInfo: w,
                playbackCoordinator: e,
                timelineView: a,
                setSelectedMarker: i,
                onNavigateToClip: o,
                onNavigateToScreenshot: u,
                bLowDiskSpace: c,
                clearRange: n,
              });
              (0, ui.lX)(z, g, O);
            },
            [d, c, e, a, i, o, u, n],
          );
        }
        function ia(a) {
          const {
              playbackCoordinator: e,
              timelineView: i,
              markerInfo: n,
              setSelectedMarker: o,
              clearRange: u,
              bLowDiskSpace: c,
              onNavigateToClip: d,
              onNavigateToScreenshot: h,
            } = a,
            g = (0, M.q3)(() =>
              i.ConvertGlobalMSToClipOrNone(n.nGlobalMS.valMS),
            ),
            w = (0, M.q3)(() =>
              e.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                n.nGlobalMS.valMS,
              ),
            ),
            O = Hi(i),
            z = (it) => {
              let et = fs,
                nt = ms;
              (0, It.zG)(n.entry) &&
                ((et = 0), (nt = parseInt(n.entry.duration)));
              const [Mt, Ot] = e
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  n.strTimelineID,
                  n.nGlobalMS.valMS,
                  et,
                  nt,
                );
              e.SetPlaytimeFromGlobalMS((0, tt.Sb)(Mt)),
                o?.(n.entry.id, n.strTimelineID, Mt, Ot),
                Ht.y.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/ClipFromHighlight",
                ),
                it.stopPropagation();
            },
            L = () => {
              g &&
                (Ht.y.ReportTrackedAction(
                  `/GameRecording/MarkerCtxMenu/ViewClip/${n.entry.type}`,
                ),
                d && d(g.clipID));
            },
            A = (it) => {
              if (!(0, It.N$)(n.entry)) return;
              Ht.y.ReportTrackedAction(
                `/GameRecording/HighlightCtxMenu/Marker/Edit/${n.entry.type}`,
              );
              let et = (0, f.jsx)(us, {
                entry: n.entry,
                playbackCoordinator: e,
                fnClearSelection: u,
                strTimelineID: n.strTimelineID,
              });
              (0, cs.pg)(et, (0, wr.uX)(it)),
                it.stopPropagation(),
                it.preventDefault();
            },
            H = (it) => {
              (0, It.N$)(n.entry) &&
                (Ht.y.ReportTrackedAction(
                  `/GameRecording/HighlightCtxMenu/Marker/Delete/${n.entry.type}`,
                ),
                e.RemoveUserMarker(n.strTimelineID, n.entry.id));
            },
            V = () => {
              !(0, It.sX)(n.entry) ||
                !n.entry?.handle ||
                (Ht.y.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/Screenshot",
                ),
                h(i.GetGameID(), n.entry.handle));
            };
          let Z = [];
          return (
            (0, It.N$)(n.entry) &&
              Z.push(
                (0, f.jsx)(
                  Re.kt,
                  {
                    onSelected: A,
                    className: ar.HighlightContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(ar.MenuItem, ar.EditMarker),
                      children: [
                        (0, f.jsx)(q.ff, {}),
                        (0, ot.we)("#Marker_Action_Edit"),
                      ],
                    }),
                  },
                  "edit",
                ),
              ),
            w?.strRecordingID &&
              !c &&
              Z.push(
                (0, f.jsx)(
                  Re.kt,
                  {
                    onSelected: z,
                    className: ar.HighlightContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(ar.MenuItem, ar.CreateClip),
                      children: [
                        (0, f.jsx)(q.Wd, {}),
                        (0, ot.we)("#TimelineDialog_ClipVideo"),
                      ],
                    }),
                  },
                  "clip",
                ),
              ),
            (0, It.sX)(n.entry) &&
              Z.push(
                (0, f.jsx)(
                  Re.kt,
                  {
                    onSelected: V,
                    className: ar.HighlightContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(ar.MenuItem, ar.ViewScreenshot),
                      children: [
                        (0, f.jsx)(q.pw, {}),
                        (0, ot.we)("#TimelineDialog_ViewScreenshot"),
                      ],
                    }),
                  },
                  "view_screenshot",
                ),
              ),
            g &&
              L &&
              Z.push(
                (0, f.jsx)(
                  Re.kt,
                  {
                    onSelected: L,
                    className: ar.HighlightContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(ar.MenuItem, ar.ViewClip),
                      children: [
                        (0, f.jsx)(q.ai, {}),
                        (0, ot.we)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  },
                  "view_clip",
                ),
              ),
            (0, It.N$)(n.entry) &&
              Z.push(
                (0, f.jsx)(
                  Re.kt,
                  {
                    onSelected: H,
                    className: ar.HighlightContextMenuItem,
                    children: (0, f.jsxs)("div", {
                      className: (0, X.A)(ar.MenuItem, ar.DeleteMarker),
                      children: [
                        (0, f.jsx)(rr.lMJ, {}),
                        (0, ot.we)("#Marker_Action_Delete"),
                      ],
                    }),
                  },
                  "delete",
                ),
              ),
            Z.length ? (0, f.jsx)(Re.tz, { refInstance: O, children: Z }) : null
          );
        }
        const fs = 5e3,
          ms = 3e3,
          na = 5e3;
        function sa(a) {
          const {
              markerInfo: e,
              view: i,
              coordinator: n,
              gameID: o,
              clipID: u,
              timelineID: c,
              faded: d,
            } = a,
            h = e.nGlobalMS,
            g = (0, M.q3)(() => i.ConvertGlobalMSToGlobalPXOffset(h.valMS)),
            w = (0, M.q3)(() => {
              const et = i.GetThumbnailComponent();
              return et && et !== Qe.Highlight;
            }),
            O = ra(),
            { selectedMarker: z } = Qr(),
            L =
              e.entry?.id == z?.strEntryID &&
              e.strTimelineID == z?.strTimelineID,
            { ref: A, ...H } = aa(i, e),
            V = y.useCallback(
              (et) => {
                const nt = h.valMS - na,
                  Mt = i.FindTimelineOffsets(c),
                  Ot = Math.max(nt, Mt.globalOffsetMS);
                n.SetPlaytimeFromGlobalMS((0, tt.Sb)(Ot)),
                  n.SetDisplayHighlightEntry(e.entry),
                  et.stopPropagation(),
                  Ht.y.ReportTrackedAction(
                    `/GameRecording/Marker/Click/${e.entry.type}`,
                  );
              },
              [n, h.valMS, c, i, e],
            ),
            Z = (et) => {
              O(et, e, {
                bDisableMouseOverlay: !0,
                bForcePopup: !0,
                bAlwaysOnTop: !0,
              }),
                et.stopPropagation();
            },
            it = { transform: `translateX( calc( ${g}px - 50% ))` };
          return (0, f.jsxs)("div", {
            className: (0, X.A)(
              Kr.MarkerAndDropline,
              w && Kr.NoPointer,
              d && Kr.Faded,
            ),
            style: it,
            ref: A,
            onContextMenu: Z,
            ...H,
            children: [
              (0, f.jsx)(
                "div",
                {
                  className: (0, X.A)(Kr.TimelineMarkerCtn),
                  children: (0, f.jsx)(
                    jn,
                    {
                      classNames: Kr.TimelineMarker,
                      entry: e.entry,
                      strMarkerIcon: e.strMarkerIcon,
                      faded: d,
                      onClick: V,
                      bSelectedMarker: L,
                    },
                    e.entry.id,
                  ),
                },
                h.valMS,
              ),
              (0, f.jsx)("div", {
                className: Kr.DroplineCtn,
                children: (0, f.jsx)("div", {
                  className: (0, X.A)(Kr.TimelineMarkerDropLine),
                }),
              }),
            ],
          });
        }
        const ds = 150;
        function aa(a, e) {
          const i = y.useRef(void 0),
            n = y.useRef(void 0),
            o = y.useCallback(
              (d) => {
                if (!i.current) return;
                const h = i.current.getBoundingClientRect();
                if (d.clientY >= h.top && d.clientY <= h.bottom) {
                  if (h.left - d.clientX > 1 || d.clientX - h.right > 1) {
                    a.SetThumbnailComponent(null),
                      n.current && n.current(),
                      (n.current = null);
                    return;
                  }
                  return;
                }
                const g = h.left + 0.5 * h.width;
                (d.clientX < g - ds || d.clientX > g + ds) &&
                  (a.SetThumbnailComponent(null),
                  n.current && n.current(),
                  (n.current = null));
              },
              [a],
            ),
            u = y.useCallback(
              (d) => {
                if (
                  (a.SetThumbnailComponent(Qe.Highlight),
                  a.SetThumbnailEntry(e),
                  !n.current)
                ) {
                  const h = (0, wr.uX)(d);
                  h.addEventListener("mousemove", o),
                    (n.current = () => h.removeEventListener("mousemove", o));
                }
                d.stopPropagation();
              },
              [o, e, a],
            ),
            c = y.useCallback(
              (d) => {
                const h = i.current.getBoundingClientRect(),
                  g = h.left,
                  w = h.right;
                if (d.clientX - g < 1 || w - d.clientX < 1) {
                  a.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null);
                  return;
                }
                (0, wr.id)(i.current, d.relatedTarget) ||
                  (d.clientY - h.top > 1 &&
                    h.bottom - d.clientY > 1 &&
                    d.clientX - h.left > 1 &&
                    h.right - d.clientX > 1 &&
                    (a.SetThumbnailComponent(null),
                    n.current && n.current(),
                    (n.current = null))),
                  d.stopPropagation();
              },
              [a],
            );
          return (
            y.useEffect(() => () => n.current && n.current(), []),
            { ref: i, onMouseOver: u, onMouseLeave: c }
          );
        }
        const la = 16;
        function Fn(a) {
          return a.type === "achievement" ? 9e3 : a.priority;
        }
        const oa = y.memo(function (e) {
            const i = yt(),
              n = (0, M.q3)(() => i.GetVisibleTimelines());
            return (0, f.jsx)(f.Fragment, {
              children: n.map((o) =>
                (0, f.jsx)(ca, { timeline: o }, o.timelineID),
              ),
            });
          }),
          Ji = { screenshot: 0, event: 0, achievement: 1, usermarker: 2 };
        function ua(a, e) {
          if (Ji[a.type] !== Ji[e.type]) return Ji[e.type] - Ji[a.type];
          const i = Fn(a),
            n = Fn(e);
          return i != n
            ? n - i
            : a.time != e.time
              ? parseInt(a.time) - parseInt(e.time)
              : a.id.localeCompare(e.id);
        }
        const ca = y.memo(function (e) {
          const { timeline: i } = e,
            n = yt(),
            o = C(),
            c = (0, M.q3)(
              () => n.GetVisibleTimelineHighlights(i.timelineID) || [],
            )
              .slice()
              .sort(ua),
            d = (0, M.q3)(() => n.GetTimelineOffsetMS(i.timelineID)),
            h = i.globalOffsetMS - d,
            g = o.GetGameID(),
            w = o.GetClipID(),
            O = n.GetCurrentZoomScale() * la;
          let z = new ta(O);
          return c.map((L, A) => {
            if (Ms(L) !== "highlight") return null;
            const H = `${L.type}_${L.id}_${i.timelineID}_${A}`,
              V = fa(i.timelineID, h, L),
              Z = z.BAllowIcon(V.nGlobalMS.valMS);
            return (0, f.jsx)(
              sa,
              {
                gameID: g,
                clipID: w,
                view: n,
                coordinator: o,
                faded: !Z,
                timelineID: i.timelineID,
                markerInfo: V,
              },
              H,
            );
          });
        });
        function fa(a, e, i) {
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
              (0, ut.q_)(
                `Unexpected timeline entry type ${i.type}, returning empty highlight marker`,
              ),
              null
            );
          let n = i;
          const o = (0, It.xz)(n);
          return {
            entry: n,
            strMarkerIcon: o ? "steam_achievement" : n.icon,
            nMarkerPriority: Fn(n),
            strTimelineID: a,
            strTitle: (!o && n.title) || "",
            strDescription: (!o && n.description) || "",
            nGlobalMS: (0, tt.Sb)(parseInt(n.time) + e),
          };
        }
        function Ms(a) {
          switch (a.type) {
            case "usermarker":
            case "achievement":
            case "screenshot":
            case "error":
              return "highlight";
            case "event":
              return parseInt(a.duration) > 0 ? "range_highlight" : "highlight";
            default:
              return "none";
          }
        }
        var _r = x(53298);
        function ma(a) {
          const {
              view: e,
              entry: i,
              nGlobalEntryEndMS: n,
              nGlobalTLStartMS: o,
            } = a,
            u = C(),
            c = (0, tt.Sb)(parseInt(i.time) + o.valMS),
            d = (0, M.q3)(() => {
              const z = e.ConvertGlobalMSToGlobalPXOffset(c.valMS),
                L = e.GetVirtualWindowStartPX();
              return L < z ? z : L;
            }),
            h = (0, M.q3)(() => {
              const z = e.ConvertGlobalMSToGlobalPXOffset(n.valMS),
                L = e.GetVirtualWindowEndPX();
              return L < z ? L : z;
            }),
            g = !!u.GetClipID(),
            w = { transform: `translateX( ${d}px )`, width: h - d },
            O = (0, X.A)({
              [_r.Unspecified]: i.mode === It.il.Invalid,
              [_r.Staging]: i.mode === It.il.Staging,
              [_r.Menus]: i.mode === It.il.Menus,
              [_r.Playing]: i.mode === It.il.Playing,
            });
          return (0, f.jsx)(
            "div",
            {
              className: (0, X.A)(
                _r.GameModeMarker,
                O,
                g && _r.GameModeMarkerClip,
              ),
              style: w,
            },
            i.id,
          );
        }
        const da = y.memo(function (e) {
            const i = yt(),
              n = (0, M.q3)(() => i.GetVisibleTimelines());
            return (0, f.jsx)(f.Fragment, {
              children: n.map((o) =>
                (0, f.jsx)(Ma, { timeline: o }, o.timelineID),
              ),
            });
          }),
          Ma = y.memo(function (e) {
            const {
                timelineID: i,
                globalOffsetMS: n,
                nDurationMS: o,
              } = e.timeline,
              u = yt(),
              c = (0, M.q3)(() => {
                const O = u.GetVisibleTimelineGameModes(i);
                return !O || O.length === 0
                  ? [
                      {
                        time: "0",
                        type: "gamemode",
                        mode: It.il.Invalid,
                        id: "synthetic",
                      },
                    ]
                  : O;
              }),
              d = (0, tt.Sb)(n + o),
              h = u.GetTimelineOffsetMS(i),
              g = n - h;
            let w = [];
            for (let O = 0; O < c.length; O++) {
              const z = (0, tt.Sb)(
                O < c.length - 1 ? parseInt(c[O + 1].time) + g : d.valMS - 1,
              );
              w.push(
                (0, f.jsx)(
                  ma,
                  {
                    view: u,
                    entry: c[O],
                    nGlobalEntryEndMS: z,
                    nGlobalTLStartMS: (0, tt.Sb)(g),
                  },
                  `gameMode_${i}_${O}`,
                ),
              );
            }
            return (0, f.jsx)(f.Fragment, { children: w });
          });
        var Yi = x(36616),
          Vr = x(5540);
        const ba = 500,
          ha = (0, y.memo)(function (e) {
            const i = C(),
              n = (0, M.q3)(() => i.GetHidePlayer()),
              [o, u] = (0, y.useState)({
                bDragActive: !1,
                bPausedOnDragStart: !1,
              }),
              c = yt(),
              d = (0, M.q3)(() => {
                if (
                  c.GetAutoScrollPaused() ||
                  c.BReachedMaxScroll() ||
                  c.BReachedMinScroll() ||
                  i.BIsVideoElementPaused()
                )
                  return !1;
                const h = i.GetGlobalMSPlaytime(),
                  g = c.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                  w = c.GetMaxScrollLeftPX() + 0.5 * c.GetScrollWindowWidth();
                return g < w;
              });
            return n
              ? (0, f.jsx)(Sa, { setDragActive: u })
              : d
                ? (0, f.jsx)(ya, { view: c, setDragActive: u })
                : (0, f.jsx)(Ba, { dragState: o, setDragActive: u });
          });
        function ya(a) {
          const { view: e, setDragActive: i } = a,
            n = (0, M.q3)(
              () => e.GetVisualWindowStartPX() + e.GetScrollWindowWidth() / 2,
            );
          return (0, f.jsx)(Dn, {
            playheadPosition: n,
            children: (0, f.jsx)(kn, { setDragActive: i, bDragActive: !1 }),
          });
        }
        const Sa = (0, y.memo)(function (e) {
            const { setDragActive: i } = e,
              n = yt(),
              o = (0, M.q3)(() => n.GetScrollableWidthPX()),
              u = (0, ct._g)(100),
              c = (0, y.useCallback)(
                (d) => {
                  n.GetAutoScrollPaused() || u(() => n.ScrollToOffset(d));
                },
                [u, n],
              );
            return (
              (0, y.useEffect)(() => n.ScrollToEnd(), [n]),
              (0, y.useEffect)(() => c(o), [o, c]),
              (0, f.jsx)(Dn, {
                playheadPosition: o,
                children: (0, f.jsx)(kn, { setDragActive: i, bDragActive: !1 }),
              })
            );
          }),
          Ba = (0, y.memo)(function (e) {
            const { dragState: i, setDragActive: n } = e,
              { bDragActive: o, bPausedOnDragStart: u } = i,
              c = C(),
              d = yt(),
              h = Gr(),
              g = di(),
              w = va(g, d, o, h, c);
            return (
              (0, y.useEffect)(() => {
                if (!o) return;
                d.SetThumbnailPosition(w);
                const O = d.ConvertPXOffsetToGlobalMS(w, !1);
                if (!O) return;
                const z = c.GetLiveEdgeMS();
                c.SetPlaytimeFromGlobalMS(
                  z.valMS < O ? z : (0, tt.Sb)(O),
                  u,
                  !0,
                  !0,
                );
              }, [w, u, o, c, d]),
              (0, f.jsx)("div", {
                className: (0, X.A)(
                  Vr.PlayheadInteractionCtn,
                  o && Vr.ActiveCtn,
                ),
                children: (0, f.jsx)(Dn, {
                  className: o ? Vr.Active : void 0,
                  playheadPosition: w,
                  children: (0, f.jsx)(kn, {
                    setDragActive: n,
                    bDragActive: o,
                  }),
                }),
              })
            );
          }),
          kn = (0, y.memo)(function (e) {
            const { setDragActive: i, bDragActive: n } = e,
              o = yt(),
              u = (d) => {
                n || o.SetThumbnailComponent(Qe.Playhead), d.stopPropagation();
              },
              c = (d) => {
                n || o.SetThumbnailComponent(null), d.stopPropagation();
              };
            return (0, f.jsx)("div", {
              className: Vr.PlayHeadContent,
              onMouseOver: u,
              onMouseOut: c,
              onFocus: u,
              onBlur: c,
              children: (0, f.jsx)(ga, { setDragActive: i }),
            });
          }),
          ga = y.memo(function (e) {
            const { setDragActive: i } = e,
              n = C(),
              o = Ui(),
              u = yt(),
              c = (0, M.q3)(() => {
                const g = u.GetThumbnailComponent();
                return g === Qe.RangeLeft || g === Qe.RangeRight;
              }),
              d = (0, y.useCallback)(
                (g) => {
                  if (g.button != 0) return;
                  const w = (0, wr.uX)(g);
                  let O, z;
                  const L = () => {
                    const H = n.GetGameRecordingVideo().IsPaused();
                    i({ bDragActive: !0, bPausedOnDragStart: H }),
                      u.SetThumbnailComponent(Qe.Playhead),
                      O();
                  };
                  w.addEventListener("mousemove", L),
                    (O = () => w.removeEventListener("mousemove", L));
                  const A = () => {
                    i({ bDragActive: !1, bPausedOnDragStart: !1 }),
                      u.SetThumbnailComponent(null),
                      O(),
                      z();
                  };
                  w.addEventListener("mouseup", A),
                    (z = () => w.removeEventListener("mouseup", A));
                },
                [n, i, u],
              ),
              h = (0, y.useCallback)(
                (g) => {
                  const w = n.GetGlobalMSPlaytime();
                  o(g, w, !0, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  }),
                    g.stopPropagation(),
                    g.preventDefault();
                },
                [n, o],
              );
            return (0, f.jsx)("div", {
              className: (0, X.A)(Vr.PlayHead, c && Vr.NoPointer),
              onMouseDown: d,
              onContextMenu: h,
              children: (0, f.jsx)(bs, {}),
            });
          });
        function bs(a) {
          return (0, f.jsxs)("svg", {
            ...a,
            width: "12",
            height: "32",
            viewBox: "0 0 12 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, f.jsx)("rect", {
                x: "5",
                y: "4",
                width: "2",
                height: "40",
                fill: "currentColor",
              }),
              (0, f.jsx)("path", {
                d: "M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function va(a, e, i, n, o) {
          const u = (0, y.useRef)(void 0),
            c = (0, M.q3)(() => e.GetScrollableWidthPX()),
            d = (0, M.q3)(() => e.GetScrollWindowWidth()),
            [h, g] = (0, y.useState)(0),
            w = (0, y.useRef)(void 0),
            O = (0, y.useRef)(void 0),
            { clearPlaybackAnimation: z, startPlaybackAnimation: L } = wa(
              o,
              e,
              g,
            );
          (0, y.useEffect)(
            () => () => {
              w.current &&
                (cancelAnimationFrame(w.current),
                (w.current = null),
                (O.current = null)),
                z();
            },
            [z],
          );
          const A = y.useCallback(
            (H, V, Z, it, et) => {
              if (et(V))
                g(
                  (0, wt.OQ)(
                    V.GetVisualWindowStartPX() + Z,
                    0,
                    V.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(w.current),
                  (w.current = null),
                  (O.current = null);
              else {
                if (
                  (w.current &&
                    (w.current = requestAnimationFrame((nt) =>
                      A(nt, V, Z, it, et),
                    )),
                  O.current)
                ) {
                  const Mt = ((H - O.current) / ba) * it;
                  V.ScrollBy(Mt),
                    g((Ot) => (0, wt.OQ)(Ot + Mt, 0, V.GetScrollableWidthPX()));
                }
                O.current = H;
              }
            },
            [g],
          );
          return (
            (0, y.useEffect)(() => {
              const H = d * (1 - ri),
                V = d * ri;
              if (
                (w.current &&
                  (cancelAnimationFrame(w.current),
                  (w.current = null),
                  (O.current = null)),
                !i)
              ) {
                L();
                return;
              }
              if ((z(), a.valPX < V && !e.BReachedMinScroll())) {
                if (a.valPX <= u.current) {
                  const Z = a.valPX - V,
                    et = (0, wt.OQ)(Math.abs(Z / V), 0, 1) * Z;
                  w.current = requestAnimationFrame((nt) =>
                    A(nt, e, a.valPX, et, e.BReachedMinScroll),
                  );
                }
                u.current = a.valPX;
              } else if (a.valPX > H && !e.BReachedMaxScroll()) {
                if (a.valPX >= u.current) {
                  const Z = a.valPX - H,
                    et = (0, wt.OQ)(Math.abs(Z / (d - H)), 0, 1) * Z;
                  w.current = requestAnimationFrame((nt) =>
                    A(nt, e, a.valPX, et, e.BReachedMaxScroll),
                  );
                }
                u.current = a.valPX;
              } else g((0, wt.OQ)(n.valPX, 0, c));
            }, [i, z, n.valPX, d, c, A, a.valPX, L, e]),
            h
          );
        }
        function wa(a, e, i) {
          const n = (0, y.useRef)(void 0),
            o = a.GetGameRecordingVideo(),
            u = (0, y.useRef)(void 0),
            c = (0, y.useRef)(void 0),
            d = (0, y.useRef)(void 0),
            h = (0, y.useRef)(void 0),
            g = (0, y.useCallback)(() => {
              if (!n.current) return;
              const z = a.GetGlobalMSPlaytime();
              if (z.valMS >= 0) {
                const L = o.BVideoElementPlaying(),
                  A = o.GetVideoElementCurrentTime(),
                  H = e.GetScrollableWidthPX(),
                  V = e.GetCurrentZoomScale();
                if (u.current !== z.valMS || (h.current && h.current != V)) {
                  const Z = e.ConvertGlobalMSToGlobalPXOffset(z.valMS),
                    it = Math.min(H, Z);
                  i(it), (d.current = it);
                } else if (
                  u.current &&
                  u.current === z.valMS &&
                  A &&
                  c.current &&
                  c.current !== A &&
                  L
                ) {
                  const Z = u.current + (A - c.current) * 1e3,
                    it = e.ConvertGlobalMSToGlobalPXOffset(Z);
                  if (d.current && d.current < it) {
                    const et = Math.min(H, it);
                    i(et);
                  }
                  d.current = it;
                }
                L || ((c.current = null), (u.current = z.valMS)),
                  L &&
                    u.current !== z.valMS &&
                    ((c.current = A), (u.current = z.valMS)),
                  (h.current = V);
              }
              n.current = requestAnimationFrame(g);
            }, [a, i, e, o]),
            w = (0, y.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current),
                (n.current = null),
                (u.current = null),
                (c.current = null),
                (d.current = null);
            }, []),
            O = (0, y.useCallback)(() => {
              n.current || (n.current = requestAnimationFrame(g));
            }, [g]);
          return { clearPlaybackAnimation: w, startPlaybackAnimation: O };
        }
        function Dn(a) {
          const { className: e, playheadPosition: i, children: n } = a;
          return (0, f.jsx)("div", {
            className: (0, X.A)(Vr.PlayHeadContainer, e),
            style: { transform: `translateX( calc(${i}px - 50% ))` },
            children: n,
          });
        }
        var Bt = x(48419);
        const Ta = parseInt(Bt.thumbnailWidth),
          pa = y.forwardRef(function (e, i) {
            const {
                globalMS: n,
                children: o,
                imgClassName: u,
                className: c,
                ...d
              } = e,
              h = C(),
              g = h.GetGameID(),
              w = h.GetClipID(),
              O = (0, M.q3)(() => h.GetRecordingMode()),
              z = (0, M.q3)(() =>
                h.ConvertGlobaOffsetToRecordingAndRelativeOffset(n),
              ),
              L = Hr(),
              A = !1,
              H =
                z && A
                  ? Math.round(z.nRecordingOffsetMS * 100) / 100
                  : z?.nRecordingOffsetMS,
              V = yr(g, w, z?.strRecordingID, H, z?.nStartOffsetMS, Ta, A),
              [Z, it] = (0, y.useState)();
            return (
              (0, y.useEffect)(() => {
                V && it(V);
              }, [V]),
              (0, f.jsxs)("div", {
                ref: i,
                className: (0, X.A)(Bt.ThumbnailContainerOffset, Bt[O], c),
                ...d,
                children: [
                  (0, f.jsxs)("div", {
                    className: (0, X.A)(
                      Bt.ThumbnailContents,
                      z?.strRecordingID && !Z && Bt.Hide,
                      Bt[O],
                    ),
                    children: [
                      (0, f.jsx)("div", {
                        className: Bt.ImageAndInfoBoxContainer,
                        children: (0, f.jsxs)("div", {
                          className: Bt.ImageContainer,
                          children: [
                            z?.strRecordingID
                              ? (0, f.jsx)("img", {
                                  className: Bt.ThumbnailImage,
                                  src: Z,
                                })
                              : (0, f.jsx)("div", {
                                  className: Bt.NoRecordedContent,
                                  children: (0, ot.we)(
                                    "#GameRecording_PlayerNoContent",
                                  ),
                                }),
                            (0, f.jsx)(Ia, {}),
                          ],
                        }),
                      }),
                      (0, f.jsx)("div", {
                        className: (0, X.A)(Bt.TooltipChildren),
                        children: o,
                      }),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    className: (0, X.A)(Bt.ThumbnailHitBoxPadding),
                  }),
                ],
              })
            );
          });
        function Ia() {
          const a = yt(),
            e = (0, M.q3)(() => a.GetGameID()),
            i = (0, M.q3)(() => a.GetThumbnailComponent()),
            n = (0, M.q3)(() => a.GetThumbnailEntry());
          if (!n || i !== Qe.Highlight) return null;
          if ((0, It.xz)(n.entry))
            return (0, f.jsx)(Oa, {
              thumbnailEntry: n,
              achievementEntry: n.entry,
              strGameID: e,
            });
          let o = "",
            u = "";
          return (
            (0, It.In)(n.entry)
              ? (u =
                  (0, ot.we)(n.entry.description) ||
                  "#GameRecording_UnknownError")
              : (0, It.N$)(n.entry)
                ? ((o = n.entry.title
                    ? n.entry.title
                    : (0, ot.we)("#Marker_UserMarker_Title")),
                  (u = n.entry.description || ""))
                : (0, It.eJ)(n.entry) &&
                  ((o = n.entry.title || ""), (u = n.entry.description || "")),
            !o && !u
              ? null
              : (0, f.jsx)(hs, { title: o, description: u, thumbnailEntry: n })
          );
        }
        function Oa(a) {
          const { strGameID: e, thumbnailEntry: i, achievementEntry: n } = a,
            o = new Nr.VS(e),
            u = Ut(o.GetAppID(), n.achievement_name);
          return u
            ? (0, f.jsx)(hs, {
                title: u.name ?? "",
                description: u.description ?? "",
                thumbnailEntry: i,
              })
            : null;
        }
        function hs(a) {
          const { title: e, description: i, thumbnailEntry: n } = a;
          return (0, f.jsxs)("div", {
            className: Bt.InfoBoxContainer,
            children: [
              (0, f.jsxs)("div", {
                className: Bt.Header,
                children: [
                  (0, f.jsx)("div", {
                    className: Bt.Icon,
                    children: (0, f.jsx)(Si, {
                      entry: n.entry,
                      strMarkerIcon: n.strMarkerIcon,
                    }),
                  }),
                  e && (0, f.jsx)("div", { className: Bt.Title, children: e }),
                ],
              }),
              (0, f.jsx)("div", {
                className: Bt.DescriptionBlock,
                children:
                  i &&
                  (0, f.jsx)("div", { className: Bt.Description, children: i }),
              }),
            ],
          });
        }
        const za = y.forwardRef(function (e, i) {
          const { globalPX: n, onMouseEnter: o, onMouseLeave: u } = e,
            c = yt(),
            d = (0, M.q3)(() => c.ConvertPXOffsetToGlobalMS(n, !1)),
            h = (0, M.q3)(() => c.GetThumbnailComponent()),
            g = C(),
            w = (0, M.q3)(() => g.GetRecordingMode());
          return (0, f.jsxs)(pa, {
            className: (0, X.A)(Bt.ThumbnailTooltip, Bt[w], Bt[h]),
            globalMS: d,
            ref: i,
            onMouseEnter: o,
            onMouseLeave: u,
            children: [
              (0, f.jsx)(Pa, { globalMS: d }),
              (0, f.jsx)(ja, { globalMS: d }),
              (0, f.jsxs)("div", {
                className: Bt.TooltipInteractionRegion,
                children: [
                  h === Qe.Highlight
                    ? (0, f.jsx)(Wa, {})
                    : (0, f.jsx)(Ea, { globalPX: n }),
                  (0, f.jsx)(Fa, { globalMS: d }),
                ],
              }),
            ],
          });
        });
        function ja(a) {
          const { globalMS: e } = a,
            i = yt(),
            n = (0, M.q3)(() => i.GetStateDescriptionAtGlobalMS(e));
          return n?.title
            ? (0, f.jsx)("div", {
                className: Bt.StateDescription,
                children: n.title,
              })
            : null;
        }
        function xa(a, e) {
          return a.priority - e.priority;
        }
        function Pa(a) {
          const { globalMS: e } = a,
            { setSelectedMarker: i } = Qr(),
            n = yt(),
            o = C(),
            u = (0, M.q3)(() => n.FindRangeEventsAtGlobalMS(e)),
            c = 3,
            d = u.length > c ? u.sort(xa).slice(0, c) : u,
            h = (g, w) => {
              const O = parseInt(w.duration),
                { nTimelineOffsetMS: z, strTimelineID: L } =
                  o.ConvertGlobalOffsetToTimelineRelativeOffset(e),
                A = e - z.valMS + parseInt(w.time),
                [H, V] = o.GetLoader().CreateGlobalRangeForTimeline(L, A, 0, O);
              o.SetPlaytimeFromGlobalMS((0, tt.Sb)(H)),
                i?.(w.id, L, H, V),
                Ht.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromRangeEvent",
                ),
                g.stopPropagation();
            };
          return (0, f.jsx)(f.Fragment, {
            children: d.map((g, w) =>
              (0, f.jsxs)(
                "div",
                {
                  className: Bt.TooltipRangeContainer,
                  onClick: (O) => h(O, g),
                  children: [
                    g.icon &&
                      (0, f.jsx)(Q, {
                        gameID: o.GetGameID(),
                        icon: g.icon,
                        className: Bt.RangeIcon,
                      }),
                    (0, f.jsx)("div", {
                      className: Bt.Title,
                      children: g.title,
                    }),
                    (0, f.jsx)("div", {
                      className: Bt.Duration,
                      children: (0, Xr.qZ)(parseInt(g.duration) / 1e3, !1),
                    }),
                  ],
                },
                `${g.time}_${w}`,
              ),
            ),
          });
        }
        function Wa() {
          const a = C(),
            e = (0, M.q3)(() => a.GetRecordingMode()),
            i = yt(),
            n = (0, M.q3)(() => i.GetThumbnailEntry());
          if (!n) return null;
          const o = i.GetTimelineOffsetMS(n.strTimelineID),
            u = parseInt(n.entry.time),
            c = (0, tt.sK)(u - o),
            d = a.MakeRelativeToTimelineEndIfActive(n.strTimelineID, c.valMS);
          let h = "";
          if ((0, It.zG)(n.entry)) {
            const g = d + parseInt(n.entry.duration);
            if (d < 0) {
              const w = (0, Xr.qZ)(Math.abs(d / 1e3), !1, !1),
                O = (0, Xr.qZ)(Math.abs(g / 1e3), !1, !1);
              h = (0, ot.we)("#Duration_WrittenNegation", w + " - " + O);
            } else {
              const w = (0, Xr.qZ)(d / 1e3, !1, !1),
                O = (0, Xr.qZ)(g / 1e3, !1, !1);
              h = w + " - " + O;
            }
          } else h = (0, Xr.qZ)(d / 1e3, !1, !0);
          return (0, f.jsx)("div", {
            className: (0, X.A)(Bt.TimeDisplayContainer, Bt.Highlight, Bt[e]),
            children: h,
          });
        }
        function Ea(a) {
          const { globalPX: e } = a,
            i = yt(),
            n = (0, M.q3)(() =>
              i.ConvertPXToTimelineRelativeMS(e, "end-if-active"),
            );
          return n
            ? (0, f.jsx)("div", {
                className: Bt.TimeDisplayContainer,
                children: (0, Xr.qZ)(n / 1e3, !1, !0),
              })
            : null;
        }
        function Fa(a) {
          const { globalMS: e } = a,
            i = yt(),
            n = (0, M.q3)(() => i.GetGameID()),
            o = (0, M.q3)(() => i.GetThumbnailComponent()),
            u = (0, M.q3)(() => i.GetThumbnailEntry());
          let c = [
            (0, f.jsx)(Na, { globalMS: e }, "add_marker"),
            (0, f.jsx)(Aa, { globalMS: e }, "view_clip"),
          ];
          return (
            o == Qe.Highlight &&
              u &&
              ((0, It.In)(u.entry) || (0, It.xz)(u.entry) || (0, It.eJ)(u.entry)
                ? (c = [
                    (0, f.jsx)(Ln, { markerInfo: u }, "create_marker_clip"),
                    (0, f.jsx)(Nn, { markerInfo: u }, "view_clip"),
                  ])
                : (0, It.sX)(u.entry)
                  ? (c = [
                      (0, f.jsx)(Ln, { markerInfo: u }, "create_marker_clip"),
                      (0, f.jsx)(
                        La,
                        { entry: u.entry, gameID: n },
                        "view_screen",
                      ),
                      (0, f.jsx)(Nn, { markerInfo: u }, "view_clip"),
                    ])
                  : (0, It.N$)(u.entry) &&
                    (c = [
                      (0, f.jsx)(Da, { markerInfo: u }, "edit_user"),
                      (0, f.jsx)(Ln, { markerInfo: u }, "create_marker_clip"),
                      (0, f.jsx)(ka, { markerInfo: u }, "delete_user"),
                      (0, f.jsx)(Nn, { markerInfo: u }, "view_clip"),
                    ])),
            (0, f.jsx)("div", { className: Bt.TooltipButtons, children: c })
          );
        }
        function Ln(a) {
          const { setSelectedMarker: e } = Qr(),
            { markerInfo: i } = a,
            n = C(),
            o = (0, M.q3)(() => n.ShouldModeShowClipControls()),
            u = (0, M.q3)(() =>
              n.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                i.nGlobalMS.valMS,
              ),
            ),
            c = Lt(),
            d = Pi(),
            h = (g) => {
              let w = fs,
                O = ms;
              (0, It.zG)(i.entry) &&
                ((w = 0), (O = parseInt(i.entry.duration)));
              const [z, L] = n
                .GetLoader()
                .CreateGlobalRangeForTimeline(
                  i.strTimelineID,
                  i.nGlobalMS.valMS,
                  w,
                  O,
                );
              n.SetPlaytimeFromGlobalMS((0, tt.Sb)(z)),
                e?.(i.entry.id, i.strTimelineID, z, L),
                d(),
                Ht.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromHighlight",
                ),
                g.stopPropagation();
            };
          return !u?.strRecordingID || !o
            ? null
            : (0, f.jsx)(Tr.he, {
                toolTipContent: (0, ot.we)(
                  c
                    ? "#RecordingState_Clip_LowDiskSpace"
                    : "#TimelineDialog_ClipVideo",
                ),
                direction: "top",
                bTopmost: !0,
                children: (0, f.jsx)("div", {
                  className: (0, X.A)(Bt.Button, Bt.CreateClipButton),
                  onClick: h,
                  children: (0, f.jsx)(q.Wd, {}),
                }),
              });
        }
        function Nn(a) {
          const { markerInfo: e } = a,
            i = yt(),
            n = (0, M.q3)(() =>
              i.ConvertGlobalMSToClipOrNone(e.nGlobalMS.valMS),
            ),
            { onNavigateToClip: o } = xr(),
            u = () => {
              n &&
                (Ht.y.ReportTrackedAction(
                  `/GameRecording/Tooltip/ViewClip/${e.entry.type}`,
                ),
                o(n.clipID));
            };
          return n
            ? (0, f.jsx)(Tr.he, {
                toolTipContent: (0, ot.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                bTopmost: !0,
                children: (0, f.jsx)("div", {
                  className: (0, X.A)(Bt.Button, Bt.GoToClipFromMarker),
                  onClick: u,
                  children: (0, f.jsx)(rr.CeX, {}),
                }),
              })
            : null;
        }
        function ka(a) {
          const { markerInfo: e } = a,
            i = C(),
            n = yt(),
            o = (u) => {
              (0, It.N$)(e.entry) &&
                (Ht.y.ReportTrackedAction(
                  `/GameRecording/Marker/Delete/${e.entry.type}`,
                ),
                i.RemoveUserMarker(e.strTimelineID, e.entry.id),
                n.SetThumbnailComponent(null));
            };
          return (0, f.jsx)(Tr.he, {
            toolTipContent: (0, ot.we)("#Marker_Action_Delete"),
            direction: "top",
            bTopmost: !0,
            children: (0, f.jsx)("div", {
              className: (0, X.A)(Bt.Button, Bt.DeleteMarker),
              onClick: o,
              children: (0, f.jsx)(rr.lMJ, {}),
            }),
          });
        }
        function Da(a) {
          const { markerInfo: e } = a,
            i = C(),
            n = ji(),
            o = (u) => {
              if (!(0, It.N$)(e.entry)) return;
              Ht.y.ReportTrackedAction(
                `/GameRecording/Marker/Edit/${e.entry.type}`,
              );
              let c = (0, f.jsx)(us, {
                entry: e.entry,
                playbackCoordinator: i,
                fnClearSelection: n,
                strTimelineID: e.strTimelineID,
              });
              (0, cs.pg)(c, (0, wr.uX)(u)),
                u.stopPropagation(),
                u.preventDefault();
            };
          return (0, f.jsx)(Tr.he, {
            toolTipContent: (0, ot.we)("#Marker_Action_Edit"),
            direction: "top",
            bTopmost: !0,
            children: (0, f.jsx)("div", {
              className: (0, X.A)(Bt.Button, Bt.EditMarker),
              onClick: o,
              children: (0, f.jsx)(q.ff, {}),
            }),
          });
        }
        function La(a) {
          const { entry: e, gameID: i } = a,
            n = e.handle,
            { onNavigateToScreenshot: o } = xr(),
            u = () => {
              n &&
                (Ht.y.ReportTrackedAction("/GameRecording/Tooltip/Screenshot"),
                o(i, n));
            };
          return (0, f.jsx)(Tr.he, {
            toolTipContent: (0, ot.we)("#TimelineDialog_ViewScreenshot"),
            direction: "top",
            bTopmost: !0,
            children: (0, f.jsx)("div", {
              className: (0, X.A)(Bt.Button, Bt.ViewScreenshot),
              onClick: u,
              children: (0, f.jsx)(q.pw, {}),
            }),
          });
        }
        function Na(a) {
          const { globalMS: e } = a,
            i = C();
          if (
            !(0, M.q3)(() =>
              i.ConvertGlobaOffsetToRecordingAndRelativeOffset(e),
            )?.strRecordingID
          )
            return null;
          const o = () => {
            i.AddUserMarkerAtGlobalMS(
              (0, tt.Sb)(e),
              "/GameRecording/AddMarker/Thumbnail",
              null,
            ),
              i.SetPlaytimeFromGlobalMS((0, tt.Sb)(e));
          };
          return (0, f.jsx)(Tr.he, {
            toolTipContent: (0, ot.we)("#TimelineDialog_AddMarker"),
            direction: "top",
            children: (0, f.jsx)("div", {
              className: (0, X.A)(Bt.Button, Bt.AddMarker),
              onClick: o,
              children: (0, f.jsx)(q.pH, {}),
            }),
          });
        }
        function Aa(a) {
          const { globalMS: e } = a,
            i = yt(),
            n = (0, M.q3)(() => i.ConvertGlobalMSToClipOrNone(e)),
            { onNavigateToClip: o } = xr(),
            u = () => {
              n &&
                (Ht.y.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/timeline",
                ),
                o(n.clipID));
            };
          return n
            ? (0, f.jsx)(Tr.he, {
                toolTipContent: (0, ot.we)("#TimelineDialog_ViewClip"),
                direction: "top",
                children: (0, f.jsx)("div", {
                  className: (0, X.A)(Bt.Button, Bt.GoToClip),
                  onClick: u,
                  children: (0, f.jsx)(rr.CeX, {}),
                }),
              })
            : null;
        }
        const Xa = y.memo(function (e) {
            const i = Dr(),
              n = Mi(),
              o = yt(),
              u = C(),
              c = Ui(),
              d = (0, y.useCallback)(
                (g) => {
                  if (!n) return;
                  const w = g.currentTarget.getBoundingClientRect(),
                    O = wt.OQ(g.clientX - w.x, 0, w.width),
                    z = o.ConvertPXOffsetToGlobalMS(O, !1);
                  z &&
                    u.SetPlaytimeFromGlobalMS(
                      (0, tt.Sb)(z),
                      void 0,
                      void 0,
                      !0,
                    );
                },
                [n, u, o],
              ),
              h = (0, y.useCallback)(
                (g) => {
                  if (!n) return;
                  const w = g.currentTarget.getBoundingClientRect(),
                    O = wt.OQ(g.clientX - w.x, 0, w.width),
                    z = o.ConvertPXOffsetToGlobalMS(O, !1);
                  z &&
                    (c(g, (0, tt.Sb)(z), !1, {
                      bDisableMouseOverlay: !0,
                      bForcePopup: !0,
                      bAlwaysOnTop: !0,
                    }),
                    g.preventDefault(),
                    g.stopPropagation());
                },
                [n, o, c],
              );
            return (
              bi("click", d),
              bi("contextmenu", h),
              (0, f.jsx)(Ua, { globalMouseXPX: i.globalMouseXPX.valPX || 0 })
            );
          }),
          Ua = y.memo(function (e) {
            const { globalMouseXPX: i } = e,
              n = Ai(),
              o = yt(),
              u = Mi(),
              c = (0, M.q3)(() => {
                if (o.GetThumbnailComponent()) return o.GetThumbnailPosition();
              }),
              [d, h] = (0, y.useState)(),
              [g, w] = (0, y.useState)();
            return (
              (0, y.useEffect)(() => {
                if (!isNaN(c)) {
                  h(c);
                  return;
                }
                !g && n && h(i);
              }, [g, n, u, i, c]),
              (0, f.jsx)("div", {
                className: Yi.GhostPlayheadCtn,
                style: { transform: `translateX( calc(${d}px - 50%))` },
                children: (0, f.jsx)(Ha, {
                  globalPX: d,
                  setInteractingWithThumbnail: w,
                  bInteractingWithThumbnail: g,
                }),
              })
            );
          });
        function Ha(a) {
          const {
              globalPX: e,
              setInteractingWithThumbnail: i,
              bInteractingWithThumbnail: n,
            } = a,
            o = yt(),
            u = C(),
            c = (0, M.q3)(() => u.GetRecordingMode() === "Overlay"),
            d = (0, M.q3)(() => o.ConvertPXOffsetToGlobalMS(e, !1)),
            h = (0, M.q3)(() => o.GetTimelineParentCtnRef()),
            g = (0, y.useRef)(void 0),
            w = (0, y.useRef)(void 0),
            O = (0, y.useRef)(void 0),
            z = (0, M.q3)(() => o.GetThumbnailComponent()),
            L = Mi(),
            A = () => i(!0),
            H = ($e) => i(!1),
            V = (0, Tr.fS)({
              toolTipContent: (0, f.jsx)(za, {
                globalPX: e,
                ref: g,
                onMouseEnter: A,
                onMouseLeave: H,
              }),
              direction: c ? "bottom" : "top",
              nDelayShowMS: 0,
              nBodyDistance: 0,
              nAllowOffscreenPx: 0,
            }),
            { setHovered: Z, setTarget: it } = V.stateHandlers,
            et = (0, y.useCallback)(() => {
              Z(!1),
                i(!1),
                O.current && O.current(),
                (O.current = null),
                o.GetAutoScrollPaused() && o.SetAutoScrollPauseTimeout(),
                o.SetThumbnailComponent(null);
            }, [i, Z, o]),
            nt = (0, y.useCallback)(
              ($e, Ve) => {
                if (!w.current || !g.current) return;
                const tr = w.current.getBoundingClientRect(),
                  ii = tr.left,
                  ni = tr.right;
                let si = tr.top,
                  vi = tr.bottom;
                if (g.current) {
                  const wi = g.current.getBoundingClientRect();
                  c ? (vi = wi.bottom) : (si = wi.top);
                }
                ($e <= ii || $e >= ni || Ve <= si || Ve >= vi) && et();
              },
              [c, et],
            ),
            Mt = (0, y.useCallback)(
              ($e) => {
                const Ve = o.GetThumbnailComponent();
                (Ve && Ve !== Qe.Highlight) || nt($e.clientX, $e.clientY);
              },
              [nt, o],
            ),
            Ot = (0, y.useCallback)(
              ($e) => {
                nt($e.clientX, $e.clientY);
              },
              [nt],
            ),
            ir = (0, y.useCallback)(() => {
              Z(!0), it(w.current);
              const $e = (0, wr.qf)(w.current);
              $e &&
                !O.current &&
                ($e.addEventListener("mousemove", Mt),
                $e.addEventListener("mouseup", Ot),
                (O.current = () => {
                  $e.removeEventListener("mousemove", Mt),
                    $e.removeEventListener("mouseup", Ot);
                }));
            }, [Mt, Ot, Z, it]);
          bi("mouseenter", ir),
            (0, y.useEffect)(() => {
              const $e = (Ve) => {
                const tr = o.GetThumbnailComponent();
                (tr && tr === Qe.Playhead) ||
                  tr === Qe.RangeLeft ||
                  tr === Qe.RangeRight ||
                  (g.current &&
                    !(0, wr.id)(g.current, Ve.relatedTarget) &&
                    et());
              };
              return (
                h && h.addEventListener("mouseleave", $e),
                () => h && h.removeEventListener("mouseleave", $e)
              );
            }, [et, h, o]),
            (0, y.useEffect)(() => et, [et]);
          const or = (L || n) && d && !z;
          return (0, f.jsxs)("div", {
            ref: w,
            className: Yi.TooltipHoverSource,
            children: [
              (0, f.jsx)(bs, {
                className: (0, X.A)(Yi.GhostPlayhead, or && Yi.Show),
              }),
              !!d && V.tooltip,
            ],
          });
        }
        var Or = x(2508);
        const ys = 500;
        var $a = ((a) => (
          (a.none = "none"), (a.left = "left"), (a.right = "right"), a
        ))($a || {});
        const Ka = (0, y.memo)(function () {
            const [e, i] = (0, y.useState)("none"),
              n = Ii(),
              o = p(),
              u = Yr();
            return !n || !o || !u
              ? null
              : (0, f.jsx)("div", {
                  className: Or.RangeControls,
                  children: (0, f.jsx)(Va, {
                    activeControlState: e,
                    setActiveControlState: i,
                  }),
                });
          }),
          Va = (0, y.memo)(function (e) {
            const { activeControlState: i, setActiveControlState: n } = e,
              [o, u] = (0, y.useState)(),
              [c, d] = (0, y.useState)(),
              h = p(),
              g = Yr(),
              w = yt(),
              O = (0, M.q3)(() => w.ConvertGlobalMSToGlobalPXOffset(h.valMS)),
              z = (0, M.q3)(() => w.ConvertGlobalMSToGlobalPXOffset(g.valMS)),
              L = (0, y.useCallback)(
                (Z) => {
                  u(Z), w.SetAutoScrollPauseTimeout();
                },
                [w],
              ),
              A = (0, y.useCallback)(
                (Z) => {
                  d(Z), w.SetAutoScrollPauseTimeout();
                },
                [w],
              ),
              H = (0, y.useCallback)(
                (Z) => {
                  i === "none" && Z.stopPropagation();
                },
                [i],
              ),
              V = (0, y.useCallback)(
                (Z) => {
                  i === "none" && Z.stopPropagation();
                },
                [i],
              );
            return (0, f.jsx)("div", {
              className: (0, X.A)(
                Or.RangeSelectorCtn,
                i !== "none" && Or.Active,
              ),
              onMouseOver: H,
              onMouseOut: V,
              onFocus: H,
              onBlur: V,
              children: (0, f.jsxs)("div", {
                className: Or.TrackRangeControls,
                children: [
                  (0, f.jsx)(qa, {
                    isActive: i === "left",
                    setControlState: n,
                    setRangeControlPX: L,
                    pxOffset: o,
                  }),
                  (0, f.jsx)(Ga, {
                    startOffsetPX: (i === "left" && o) || O,
                    endOffsetPX: (i === "right" && c) || z,
                    className: Or.SelectedRangeMask,
                  }),
                  (0, f.jsx)(Ya, {
                    isActive: i === "right",
                    setControlState: n,
                    setRangeControlPX: A,
                    pxOffset: c,
                  }),
                ],
              }),
            });
          });
        function Qi(a, e, i) {
          const o = e.GetVisualWindowStartPX() - e.GetTimelineMarginWidth(),
            u = o + e.GetVisualWidth(),
            c = Math.max(0, o + 3),
            d = Math.min(e.GetScrollableWidthPX(), u - 3);
          i(wt.OQ(a, c, d));
        }
        function Za(a, e, i, n, o, u) {
          const c = (0, y.useRef)(void 0),
            d = (0, y.useRef)(!1),
            h = (0, y.useRef)(void 0),
            g = (0, y.useRef)(void 0),
            w = (0, M.q3)(() => e.GetScrollableWidthPX()),
            O = (0, M.q3)(() => e.GetScrollWindowWidth());
          (0, y.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (g.current = null));
            },
            [],
          );
          const z = y.useCallback(
            (L, A, H, V, Z) => {
              if (Z(A))
                u(
                  wt.OQ(
                    A.GetVisualWindowStartPX() + H,
                    0,
                    A.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (g.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((it) =>
                      z(it, A, H, V, Z),
                    )),
                  g.current)
                ) {
                  const et = ((L - g.current) / ys) * V;
                  A.ScrollBy(et),
                    u((nt) => wt.OQ(nt + et, 0, A.GetScrollableWidthPX()));
                }
                g.current = L;
              }
            },
            [u],
          );
          (0, y.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (g.current = null));
            const L = O * (1 - ri),
              A = O * ri,
              H = e.ConvertGlobalMSToGlobalPXOffset(i.valMS),
              V = e.ConvertGlobalMSToScrollWindowPXOffset(i.valMS);
            if (n.valPX > H) {
              u(H), o("right"), e.SetThumbnailComponent(Qe.RangeRight);
              return;
            }
            if (a.valPX < A && !e.BReachedMinScroll()) {
              if (a.valPX > c.current) d.current = !0;
              else if (a.valPX < c.current || !d.current) {
                const Z = Math.min(A, V),
                  it = a.valPX - Z,
                  nt = wt.OQ(Math.abs(it / Z), 0, 1) * it;
                (h.current = requestAnimationFrame((Mt) =>
                  z(Mt, e, a.valPX, nt, e.BReachedMinScroll),
                )),
                  (d.current = !1);
              }
              Qi(n.valPX, e, u);
            } else if (a.valPX > L && V > L && !e.BReachedMaxScroll()) {
              if (a.valPX < c.current) d.current = !0;
              else if (a.valPX > c.current || !d.current) {
                const Z = (Mt) => {
                    const Ot = Mt.ConvertGlobalMSToScrollWindowPXOffset(
                      i.valMS,
                    );
                    return Mt.BReachedMaxScroll() || Ot <= L;
                  },
                  it = a.valPX - L,
                  nt = wt.OQ(Math.abs(it / (O - L)), 0, 1) * it;
                (h.current = requestAnimationFrame((Mt) =>
                  z(Mt, e, a.valPX, nt, Z),
                )),
                  (d.current = !1);
              }
              Qi(n.valPX, e, u);
            } else u(wt.OQ(n.valPX, 0, w));
            c.current = a.valPX;
          }, [n.valPX, i.valMS, a.valPX, o, e, u, w, z, O]);
        }
        const qa = (0, y.memo)(function (e) {
          const {
              isActive: i,
              setControlState: n,
              setRangeControlPX: o,
              pxOffset: u,
            } = e,
            c = p();
          return i
            ? (0, f.jsx)(Ja, {
                setControlState: n,
                setRangeControlPX: o,
                pxOffset: u,
              })
            : (0, f.jsx)(Ss, {
                offsetMS: c.valMS,
                direction: "left",
                setControlState: n,
                setRangeControlPX: o,
              });
        });
        function Ja(a) {
          const { setControlState: e, setRangeControlPX: i, pxOffset: n } = a,
            o = Oi(),
            u = Yr(),
            c = yt(),
            d = Gr(),
            h = di();
          return (
            Za(h, c, u, d, e, i),
            (0, y.useEffect)(() => {
              isNaN(n) ||
                (c.SetThumbnailPosition(n),
                o(Ye.Ov.TQ, (0, tt.Sb)(c.ConvertPXOffsetToGlobalMS(n))));
            }, [n, o, c]),
            (0, f.jsx)(An, { offsetPX: n, direction: "left" })
          );
        }
        const Ya = (0, y.memo)(function (e) {
          const {
              isActive: i,
              setControlState: n,
              setRangeControlPX: o,
              pxOffset: u,
            } = e,
            c = Yr();
          return i
            ? (0, f.jsx)(Qa, {
                setControlState: n,
                setRangeControlPX: o,
                pxOffset: u,
              })
            : (0, f.jsx)(Ss, {
                offsetMS: c.valMS,
                direction: "right",
                setControlState: n,
                setRangeControlPX: o,
              });
        });
        function Qa(a) {
          const { setControlState: e, setRangeControlPX: i, pxOffset: n } = a,
            o = zi(),
            u = p(),
            c = yt(),
            d = Gr(),
            h = di();
          return (
            Ca(h, c, u, d, e, i),
            (0, y.useEffect)(() => {
              isNaN(n) ||
                (c.SetThumbnailPosition(n),
                o(Ye.Ov.TQ, (0, tt.Sb)(c.ConvertPXOffsetToGlobalMS(n))));
            }, [n, o, c]),
            (0, f.jsx)(An, { offsetPX: n, direction: "right" })
          );
        }
        function Ca(a, e, i, n, o, u) {
          const c = (0, y.useRef)(void 0),
            d = (0, y.useRef)(!1),
            h = (0, y.useRef)(void 0),
            g = (0, y.useRef)(void 0),
            w = (0, M.q3)(() => e.GetScrollableWidthPX()),
            O = (0, M.q3)(() => e.GetScrollWindowWidth());
          (0, y.useEffect)(
            () => () => {
              h.current &&
                (cancelAnimationFrame(h.current),
                (h.current = null),
                (g.current = null));
            },
            [],
          );
          const z = y.useCallback(
            (L, A, H, V, Z) => {
              if (Z(A))
                u(
                  wt.OQ(
                    A.GetVisualWindowStartPX() + H,
                    0,
                    A.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(h.current),
                  (h.current = null),
                  (g.current = null);
              else {
                if (
                  (h.current &&
                    (h.current = requestAnimationFrame((it) =>
                      z(it, A, H, V, Z),
                    )),
                  g.current)
                ) {
                  const et = ((L - g.current) / ys) * V;
                  A.ScrollBy(et),
                    u((nt) => wt.OQ(nt + et, 0, A.GetScrollableWidthPX()));
                }
                g.current = L;
              }
            },
            [u],
          );
          (0, y.useEffect)(() => {
            h.current &&
              (cancelAnimationFrame(h.current),
              (h.current = null),
              (g.current = null));
            const L = O * (1 - ri),
              A = O * ri,
              H = e.ConvertGlobalMSToGlobalPXOffset(i.valMS),
              V = e.ConvertGlobalMSToScrollWindowPXOffset(i.valMS);
            if (n.valPX < H) {
              u(H), o("left"), e.SetThumbnailComponent(Qe.RangeLeft);
              return;
            }
            if (a.valPX > L && !e.BReachedMaxScroll()) {
              if (a.valPX < c.current) d.current = !0;
              else if (a.valPX > c.current || !d.current) {
                const Z = Math.max(L, V),
                  it = a.valPX - Z,
                  nt = wt.OQ(Math.abs(it / (O - Z)), 0, 1) * it;
                (h.current = requestAnimationFrame((Mt) =>
                  z(Mt, e, a.valPX, nt, e.BReachedMaxScroll),
                )),
                  (d.current = !1);
              }
              Qi(n.valPX, e, u);
            } else if (
              a.valPX < A &&
              V < A &&
              a.valPX <= c.current &&
              !e.BReachedMinScroll()
            ) {
              if (a.valPX > c.current) d.current = !0;
              else if (a.valPX < c.current || !d.current) {
                const Z = a.valPX - A,
                  et = wt.OQ(Math.abs(Z / A), 0, 1) * Z,
                  nt = (Mt) =>
                    Mt.ConvertGlobalMSToScrollWindowPXOffset(i.valMS) > A ||
                    Mt.BReachedMinScroll();
                (h.current = requestAnimationFrame((Mt) =>
                  z(Mt, e, a.valPX, et, nt),
                )),
                  (d.current = !1);
              }
              Qi(n.valPX, e, u);
            } else u(wt.OQ(n.valPX, 0, w));
            c.current = a.valPX;
          }, [i.valMS, a.valPX, o, e, u, w, O, n.valPX, z]);
        }
        function Ss(a) {
          const {
              offsetMS: e,
              direction: i,
              setControlState: n,
              setRangeControlPX: o,
            } = a,
            u = yt(),
            c = (0, M.q3)(() => u.ConvertGlobalMSToGlobalPXOffset(e));
          (0, y.useEffect)(
            () => (
              o(void 0),
              () => {
                o(c);
              }
            ),
            [c, o],
          );
          const d = (0, y.useCallback)(
              (w) => {
                const O = (0, wr.uX)(w);
                let z, L;
                const A = () => {
                  n(i),
                    u.SetThumbnailComponent(
                      i === "left" ? Qe.RangeLeft : Qe.RangeRight,
                    ),
                    z();
                };
                O.addEventListener("mousemove", A),
                  (z = () => O.removeEventListener("mousemove", A));
                const H = () => {
                  n("none"), u.SetThumbnailComponent(null), z(), L();
                };
                O.addEventListener("mouseup", H),
                  (L = () => O.removeEventListener("mouseup", H));
              },
              [i, n, u],
            ),
            h = (w) => {
              u.SetThumbnailComponent(
                i === "left" ? Qe.RangeLeft : Qe.RangeRight,
              );
            },
            g = (w) => {
              u.SetThumbnailComponent(null);
            };
          return (0, f.jsx)("div", {
            className: Or.InactiveSelectedRangeControl,
            onMouseDown: d,
            onMouseOver: h,
            onFocus: h,
            onMouseOut: g,
            onBlur: g,
            children: (0, f.jsx)(An, { offsetPX: c, direction: i }),
          });
        }
        const Ga = (0, y.memo)(function (e) {
            const { startOffsetPX: i, endOffsetPX: n, className: o } = e;
            if (isNaN(i) || isNaN(n)) return null;
            const c = { width: n - i || 0, transform: `translateX(${i}px)` };
            return (0, f.jsx)("div", {
              className: (0, X.A)(Or.RangeMask, o),
              style: c,
            });
          }),
          An = (0, y.memo)(function (e) {
            const { direction: i, offsetPX: n } = e,
              o = { transform: `translateX( calc( ${n}px - 50%) )` },
              u = yt(),
              c = (0, M.q3)(() => u.GetThumbnailComponent() === Qe.Playhead);
            return (0, f.jsx)("div", {
              style: o,
              className: (0, X.A)(Or.RangeControl),
              children: (0, f.jsx)("div", {
                className: (0, X.A)(
                  Or.RangeIcon,
                  i === "left" && Or.Left,
                  c && Or.Hide,
                ),
                children: (0, f.jsx)(Ra, {
                  innerFill: "#171d25",
                  direction: i,
                }),
              }),
            });
          });
        function Ra(a) {
          return (0, f.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3 36",
            fill: "none",
            style: {
              transform: `rotate(${a.direction === "right" ? 180 : 0}deg)`,
            },
            children: [
              (0, f.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 0)",
              }),
              (0, f.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 10)",
              }),
              (0, f.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 20)",
              }),
              (0, f.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 30)",
              }),
            ],
          });
        }
        var Bs = x(28361);
        const _a = 100,
          tl = y.memo(function (e) {
            const i = yt(),
              n = (0, M.q3)(() => i.GetVisibleWindowRelativeTimelines()),
              u = C().GetRecordingMode();
            let c = [],
              d = "";
            for (let h of n) {
              let g = i.GetTimeRecorded(h.timelineID),
                w = (0, ot._l)(g);
              w != d && (c.push({ timeline: h, strLabel: w }), (d = w));
            }
            for (let h = c.length - 2; h >= 0; h--) {
              let g = c[h];
              c[h + 1].timeline.nVisibleStartPX - g.timeline.nVisibleStartPX >=
                _a || c.splice(h, 1);
            }
            return (0, f.jsx)(f.Fragment, {
              children: c.map((h) =>
                (0, f.jsx)(
                  el,
                  {
                    startPX: h.timeline.nVisibleStartPX,
                    label: h.strLabel,
                    recordingMode: u,
                  },
                  h.timeline.timelineID,
                ),
              ),
            });
          });
        function el(a) {
          const { label: e, startPX: i, recordingMode: n } = a;
          let o = n == At.Overlay;
          return (0, f.jsx)("div", {
            className: (0, X.A)(Bs.TimelineRelativeDate, o && Bs.Overlay),
            style: { transform: `translateX(${i}px)` },
            children: e,
          });
        }
        var ti = x(78760);
        const rl = (0, y.memo)(function (e) {
          const i = yt(),
            n = (0, M.q3)(() => i.GetVisibleRecordings());
          return (0, f.jsx)(f.Fragment, {
            children: n.map((o) =>
              (0, f.jsx)(
                il,
                {
                  startPX: o.nStartPX,
                  endPX: o.nEndPX,
                  isActive: o.bIsActive,
                  recordingType: o.recordingType,
                },
                o.recordingID,
              ),
            ),
          });
        });
        function il(a) {
          const { isActive: e, endPX: i, startPX: n, recordingType: o } = a,
            u = { width: i - n || 0, transform: `translateX(${n}px)` },
            c = Hr(),
            d = o === _t,
            h = o === Rt;
          return (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)("div", {
                className: (0, X.A)(
                  ti.RecordingDecorator,
                  d && ti.Clip,
                  h && ti.Manual,
                  c && ti.ClipMode,
                ),
                style: u,
              }),
              e && (0, f.jsx)(nl, { endPX: i }),
            ],
          });
        }
        function nl(a) {
          const { endPX: e } = a,
            i = C(),
            n = yt(),
            o = (0, M.q3)(() => i.GetRecordingMode() === "Overlay"),
            u = te(i.GetGameID()),
            c = (0, M.q3)(() => i.GetIsLiveEdge() && !i.GetHidePlayer()),
            d = (0, M.q3)(() => {
              const g = i.GetLiveEdgeBufferWindowStartMS();
              return n.ConvertGlobalMSToGlobalPXOffset(g.valMS);
            });
          if (!o || u !== Dt.BackgroundRecording) return null;
          const h = { width: e - d || 0, transform: `translateX(${d}px)` };
          return (0, f.jsx)("div", {
            className: (0, X.A)(ti.LiveRecordingBuffer, c && ti.IsLive),
            style: h,
          });
        }
        var sl = x(10564);
        const al = (0, y.memo)(function (e) {
            const i = yt(),
              n = (0, M.q3)(() => i.GetVisibleClips());
            return (0, f.jsx)(f.Fragment, {
              children: n.map((o) =>
                (0, f.jsx)(
                  ll,
                  { startPX: o.pxClipStart, endPX: o.pxClipEnd },
                  o.clipID,
                ),
              ),
            });
          }),
          ll = (0, y.memo)(function (e) {
            const { endPX: i, startPX: n } = e,
              o = { width: i - n || 0, transform: `translateX(${n}px)` };
            return (0, f.jsx)("div", { className: sl.ClipDecorator, style: o });
          });
        var nr = x(99550),
          Ci = x(35009);
        function ol() {
          const a = C(),
            e = te(a.GetGameID());
          return e === Dt.NotRecording || e === Dt.NotRunning
            ? null
            : (0, f.jsx)(ul, {});
        }
        function ul(a) {
          const e = C(),
            i = (0, M.q3)(() => e.GetIsLiveEdge() && !e.GetHidePlayer()),
            n = y.useCallback(() => {
              e.SetHidePlayer(!1), e.GetGameRecordingVideo().Play();
              const o = e.GetLiveEdgeMS();
              e.SetPlaytimeFromGlobalMS(o), e.FocusGlobalMS(o);
            }, [e]);
          return (0, f.jsx)(Tr.he, {
            className: Ci.GoLiveButtonCtn,
            toolTipContent: (0, ot.we)(
              i ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
            ),
            direction: "bottom",
            children: (0, f.jsx)(qi.Z, {
              onClick: n,
              className: (0, X.A)(Ci.GoLiveButton, i && Ci.IsLive),
              children: (0, f.jsx)(q.xA, {
                className: (0, X.A)(Ci.JumpToEndIcon),
              }),
            }),
          });
        }
        const cl = (0, y.forwardRef)(function (e, i) {
            const n = yt();
            return (0, M.q3)(() => !n.BEmpty())
              ? (0, f.jsx)(ml, { ...e, timelineView: n, ref: i })
              : (0, f.jsx)(fl, { ref: i });
          }),
          fl = (0, y.forwardRef)(function (e, i) {
            return (0, f.jsx)("div", {
              ref: i,
              className: (0, X.A)(nr.ScrollbarPlaceholder, e.className),
            });
          }),
          ml = (0, y.forwardRef)(function (e, i) {
            const n = C(),
              {
                children: o,
                className: u,
                timelineView: c,
                disableZoom: d,
              } = e,
              [h, g] = (0, y.useState)(),
              w = y.useCallback(
                (H) => {
                  const V = H.target.getBoundingClientRect();
                  c.SetScrollWindowOffset(V.x),
                    c.SetScrollWindowWidth(V.width),
                    g(V);
                },
                [c],
              ),
              O = (0, ct.wY)(w),
              z = y.useCallback(
                (H) => {
                  if (H.ctrlKey && !d) {
                    const V = h ? (H.clientX - h.x) / h.width : 0.5;
                    H.deltaY > 0
                      ? c.ZoomOut(H.deltaY / 100, V)
                      : c.ZoomIn(-H.deltaY / 100, V);
                  } else c.ScrollBy(H.deltaY);
                },
                [d, h, c],
              ),
              L = () => c.SetAutoScrollPaused(!0),
              A = () => c.SetAutoScrollPauseTimeout();
            return (
              wl(n, c),
              (0, f.jsxs)("div", {
                ref: i,
                onWheel: z,
                onMouseOver: L,
                onFocus: () => {},
                onMouseLeave: A,
                children: [
                  (0, f.jsxs)("div", {
                    className: nr.LeftControlsAndContent,
                    children: [
                      (0, f.jsxs)("div", {
                        ref: O,
                        className: (0, X.A)(nr.ContentAndGradient, u),
                        children: [o, (0, f.jsx)(dl, { timelineView: c })],
                      }),
                      n.GetRecordingMode() === At.Overlay && (0, f.jsx)(ol, {}),
                    ],
                  }),
                  (0, f.jsx)("div", {
                    className: nr.ScrollbarAndSiblings,
                    children: !n.GetGamepadMode() && (0, f.jsx)(Ml, {}),
                  }),
                ],
              })
            );
          });
        function dl(a) {
          const { timelineView: e } = a,
            i = (0, M.q3)(() => e.GetVisualWindowStartPX()),
            n = (0, M.q3)(() => e.BReachedMaxScroll());
          return (0, f.jsxs)("div", {
            className: nr.ScrollGradientCtn,
            children: [
              (0, f.jsx)("div", {
                className: (0, X.A)(
                  nr.FrontGradient,
                  i === 0 && nr.HideGradient,
                ),
              }),
              (0, f.jsx)("div", {
                className: (0, X.A)(nr.EndGradient, n && nr.HideGradient),
              }),
            ],
          });
        }
        function Ml() {
          const [a, e] = (0, y.useState)({
              scrollBarWidth: 0,
              scrollBarXOffset: 0,
            }),
            i = y.useCallback((h) => {
              const g = h.target.getBoundingClientRect();
              e({ scrollBarWidth: g.width, scrollBarXOffset: g.x });
            }, []),
            n = yt(),
            o = (0, M.q3)(
              () => n.GetScrollableWidthPX() + 2 * n.GetTimelineMarginWidth(),
            ),
            u = (0, M.q3)(() => n.GetVisualWidth()),
            c = (0, y.useMemo)(
              () => (u * a.scrollBarWidth) / o || 0,
              [u, a.scrollBarWidth, o],
            ),
            d = (0, ct.wY)(i);
          return (0, f.jsxs)("div", {
            className: (0, X.A)(
              nr.ScrollBarCtn,
              Math.round(c) === Math.round(a.scrollBarWidth) &&
                nr.HideScrollBar,
            ),
            ref: d,
            children: [
              (0, f.jsx)(bl, { timelineView: n, scrollSize: a }),
              (0, f.jsx)(gl, {
                scrollSize: a,
                timelineView: n,
                timelineWidth: o,
                thumbWidth: c,
              }),
            ],
          });
        }
        function bl(a) {
          const { timelineView: e, scrollSize: i } = a,
            n = C(),
            o = hl(e, i),
            u = (0, M.q3)(() => e.GetTimelineMarginWidth()),
            c = (0, M.q3)(() => e.GetScrollableWidthPX()),
            d = (0, y.useCallback)(
              (h) => {
                const g = h + u;
                return wt.OQ((g * i.scrollBarWidth) / c, 0, i.scrollBarWidth);
              },
              [i.scrollBarWidth, u, c],
            );
          return (0, f.jsxs)("div", {
            className: nr.ScrollTrack,
            ...o,
            children: [
              (0, f.jsx)(yl, {
                timelineView: e,
                playbackCoordinator: n,
                fnConvertGlobalPXToTrackPX: d,
                scrollBarWidth: i.scrollBarWidth,
              }),
              (0, f.jsx)(Bl, {
                timelineView: e,
                fnConvertGlobalPXToTrackPX: d,
              }),
            ],
          });
        }
        function hl(a, e) {
          const i = (0, y.useRef)(void 0),
            n = (0, y.useRef)(void 0),
            o = (0, M.q3)(() => a.GetScrollableWidthPX()),
            u = (0, y.useCallback)(
              (w) => (0, tt.OB)((o * w) / e.scrollBarWidth),
              [e.scrollBarWidth, o],
            ),
            c = (0, y.useCallback)(() => {
              if (!i.current) return;
              const w = a.GetScrollWindowWidth(),
                O = a.GetVisualWindowStartPX() + w / 2;
              if (
                i.current.valPX > O - w * 0.1 &&
                i.current.valPX < O + w * 0.1
              )
                return;
              const L = a.GetScrollableWidthPX() * 0.005,
                A = i.current.valPX - O;
              if (Math.abs(A) > L) {
                const H = A > 0 ? L : -L;
                a.ScrollToOffsetCentered(O + H),
                  (n.current = requestAnimationFrame(() => c()));
              } else a.ScrollToOffsetCentered(i.current.valPX);
            }, [a]),
            d = (0, y.useCallback)(
              (w) => {
                (i.current = u(w.clientX - e.scrollBarXOffset)),
                  (n.current = requestAnimationFrame(() => c()));
              },
              [u, c, e.scrollBarXOffset],
            ),
            h = (0, y.useCallback)(() => {
              n.current && cancelAnimationFrame(n.current);
            }, []),
            g = (0, y.useCallback)(
              (w) => {
                i.current = u(w.clientX - e.scrollBarXOffset);
              },
              [u, e.scrollBarXOffset],
            );
          return (
            (0, y.useEffect)(
              () => () => {
                n.current && cancelAnimationFrame(n.current);
              },
              [],
            ),
            { onMouseDown: d, onMouseMove: g, onMouseUp: h, onMouseLeave: h }
          );
        }
        function yl(a) {
          const {
              timelineView: e,
              playbackCoordinator: i,
              fnConvertGlobalPXToTrackPX: n,
              scrollBarWidth: o,
            } = a,
            u = (0, M.q3)(() => i.GetHidePlayer()),
            c = (0, M.q3)(() => {
              const h = i.GetGlobalMSPlaytime();
              if (h && e.BInitialized()) {
                const g = Math.floor(
                  e.ConvertGlobalMSToGlobalPXOffset(h.valMS),
                );
                return n(g);
              }
              return null;
            });
          if (!c) return null;
          const d = () => {
            let h = i.GetGlobalMSPlaytime();
            u && (h = i.GetLiveEdgeMS()), e.ScrollToCenteredGlobalMS(h.valMS);
          };
          return (0, f.jsx)("div", {
            className: nr.PlayHeadAnnotation,
            onClick: d,
            style: { transform: `translateX(${u ? o : c}px)` },
            children: (0, f.jsx)(Sl, {}),
          });
        }
        function Sl() {
          return (0, f.jsx)("svg", {
            width: "52",
            height: "31",
            viewBox: "0 0 52 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, f.jsx)("path", {
              d: "M26 31L51.1147 0.25H0.885263L26 31Z",
              fill: "#D9D9D9",
            }),
          });
        }
        function Bl(a) {
          const { timelineView: e, fnConvertGlobalPXToTrackPX: i } = a,
            n = Hr(),
            o = I(),
            u = (0, M.q3)(() => {
              if (n && e.BInitialized()) {
                const d = Math.floor(
                    e.ConvertGlobalMSToGlobalPXOffset(o.nGlobalStartMS.valMS),
                  ),
                  h = Math.floor(
                    e.ConvertGlobalMSToGlobalPXOffset(o.nGlobalEndMS.valMS),
                  );
                if (!isNaN(d) && !isNaN(h)) {
                  const g = i(d),
                    w = i(h);
                  return { rangeStartPX: g, rangeEndPX: w };
                }
              }
              return null;
            });
          if (!u) return null;
          const c = () => {
            e.ScrollToCenteredGlobalMS(o.nGlobalStartMS.valMS);
          };
          return (0, f.jsx)("div", {
            className: nr.RangeAnnotation,
            onClick: c,
            style: {
              width: u.rangeEndPX - u.rangeStartPX,
              transform: `translateX(${u.rangeStartPX}px)`,
            },
          });
        }
        function gl(a) {
          const {
              scrollSize: e,
              timelineWidth: i,
              thumbWidth: n,
              timelineView: o,
            } = a,
            {
              thumbPositionPX: u,
              onMouseDown: c,
              bHiglightThumb: d,
            } = vl(e, i, n, o);
          return (0, f.jsx)("div", {
            className: (0, X.A)(nr.ScrollThumb, d && nr.Highlight),
            style: { width: n, transform: `translateX(${u}px)` },
            onMouseDown: c,
          });
        }
        function vl(a, e, i, n) {
          const [o, u] = (0, y.useState)(!1),
            [c, d] = (0, y.useState)(0),
            h = (0, M.q3)(() => {
              const A = n.BInitialized(),
                H = n.GetVisualWindowStartPX();
              return A
                ? wt.OQ((H * a.scrollBarWidth) / e, 0, a.scrollBarWidth - i)
                : 0;
            }),
            [g, w] = (0, y.useState)(!1),
            O = (0, y.useRef)(void 0);
          (0, y.useEffect)(() => {
            if (n.GetAutoScrollPaused())
              return (
                w(!0),
                (O.current = window.setTimeout(() => {
                  w(!1);
                }, 500)),
                () => window.clearTimeout(O.current)
              );
          }, [h, n]);
          const z = (0, y.useCallback)(
              (A) => {
                d(h), u(!0);
                const H = A.nativeEvent.offsetX,
                  V = n.GetTimelineParentCtnRef() ?? (0, wr.uX)(A);
                let Z, it, et;
                const nt = (Ot) => {
                  d(Ot.clientX - a.scrollBarXOffset - H);
                };
                V.addEventListener("mousemove", nt),
                  (Z = () => V.removeEventListener("mousemove", nt));
                const Mt = () => {
                  u(!1), Z(), it(), et();
                };
                V.addEventListener("mouseup", Mt),
                  V.addEventListener("mouseleave", Mt),
                  (it = () => V.removeEventListener("mouseup", Mt)),
                  (et = () => V.removeEventListener("mouseleave", Mt));
              },
              [h, a.scrollBarXOffset, n],
            ),
            L = (0, y.useMemo)(
              () => (o ? wt.OQ(c, 0, a.scrollBarWidth - i) : h),
              [c, o, h, a.scrollBarWidth, i],
            );
          return (
            (0, y.useEffect)(() => {
              if (o) {
                const A = (e * L) / a.scrollBarWidth;
                n.ScrollToOffset(A);
              }
            }, [o, a.scrollBarWidth, L, n, e]),
            { thumbPositionPX: L, onMouseDown: z, bHiglightThumb: g }
          );
        }
        function wl(a, e) {
          const i = (0, M.q3)(
            () =>
              !e.GetAutoScrollPaused() &&
              a.GetGameRecordingVideo().BVideoElementPlaying(),
          );
          (0, y.useEffect)(() => {
            if (!i) return () => {};
            let n = !1,
              o = a.GetGlobalMSPlaytime(),
              u = Date.now();
            const c = (d) => {
              const h = Date.now(),
                g = h - u;
              e.ScrollToCenteredGlobalMS(o.valMS + g);
              const w = a.GetGlobalMSPlaytime();
              w.valMS !== o.valMS && ((o = w), (u = h)),
                n || requestAnimationFrame(c);
            };
            return requestAnimationFrame(c), () => (n = !0);
          }, [a, e, i]);
        }
        var gs = x(64415),
          Rl = x(2596),
          _l = x(36118),
          to = x(71568),
          eo = x(72739),
          Tl = x(18938),
          pl = Object.defineProperty,
          Il = Object.getOwnPropertyDescriptor,
          ei = (a, e, i, n) => {
            for (
              var o = n > 1 ? void 0 : n ? Il(e, i) : e, u = a.length - 1, c;
              u >= 0;
              u--
            )
              (c = a[u]) && (o = (n ? c(e, i, o) : c(o)) || o);
            return n && o && pl(e, i, o), o;
          };
        class Zr {
          m_tours = {};
          m_strActiveTour = "";
          m_storage = void 0;
          m_bReady = !1;
          constructor() {
            (0, B.Gn)(this);
          }
          async Init(e) {
            if (this.m_storage) return;
            this.m_storage = e;
            const i = await ws(e);
            Object.keys(i || {}).forEach((n) => {
              const o = !!i[n];
              this.m_tours[n] = {
                ...(this.m_tours[n] || { stops: {} }),
                bSeen: o,
              };
            }),
              (this.m_bReady = !0);
          }
          UpdateStop(e, i, n, o) {
            this.m_tours[e] || (this.m_tours[e] = { bSeen: !1, stops: {} }),
              (this.m_tours[e].stops[i] = { options: n, elem: o });
          }
          BHasSeenTour(e) {
            return this.m_bReady
              ? this.m_tours[e] && this.m_tours[e].bSeen
              : !0;
          }
          GetTrackedStops(e) {
            return this.m_tours[e]?.stops || {};
          }
          ActivateTour(e) {
            this.m_strActiveTour &&
              this.m_strActiveTour !== e &&
              this.DismissTour(this.m_strActiveTour),
              (this.m_strActiveTour = e);
          }
          DismissTour(e) {
            this.m_tours[e] &&
              (this.MarkTourSeen(e),
              (this.m_tours[e].bSeen = !0),
              this.m_strActiveTour === e && (this.m_strActiveTour = ""));
          }
          MarkTourSeen(e) {
            return Ts(this.m_storage, e, Date.now());
          }
          MarkTourUnseen(e) {
            return Ts(this.m_storage, e, void 0);
          }
        }
        ei([B.sH], Zr.prototype, "m_tours", 2),
          ei([B.sH], Zr.prototype, "m_strActiveTour", 2),
          ei([B.sH], Zr.prototype, "m_bReady", 2),
          ei([B.XI.bound], Zr.prototype, "UpdateStop", 1),
          ei([B.XI], Zr.prototype, "ActivateTour", 1),
          ei([B.XI], Zr.prototype, "DismissTour", 1);
        const vs = "tour_history";
        async function ws(a) {
          const e = await a.GetObject(vs);
          return !e || typeof e != "object" ? {} : e;
        }
        async function Ts(a, e, i) {
          const n = await ws(a);
          return a.StoreObject(vs, { ...n, [e]: i });
        }
        const ps = new Zr();
        function Is() {
          const a = (0, Wt.rX)();
          return (
            (0, y.useEffect)(() => {
              ps.Init(a);
            }, [a]),
            ps
          );
        }
        function Xn(a) {
          const e = Is(),
            { bShowTour: i, stopElems: n } = (0, M.q3)(() => ({
              bShowTour: !e.BHasSeenTour(a),
              stopElems: e.GetTrackedStops(a),
            }));
          return {
            bShowTour: i,
            stopElems: n,
            onInteraction: (0, y.useCallback)(() => e.MarkTourSeen(a), [e, a]),
            onDismiss: (0, y.useCallback)(() => e.DismissTour(a), [e, a]),
            onActivate: (0, y.useCallback)(() => e.ActivateTour(a), [e, a]),
            updateStop: e.UpdateStop,
          };
        }
        function ro(a) {
          const { children: e } = a;
          return jsxs(Fragment, { children: [e, jsx(Ol, { ...a })] });
        }
        function Ol(a) {
          const { active: e, name: i, stops: n } = a,
            {
              bShowTour: o,
              onInteraction: u,
              onDismiss: c,
              stopElems: d,
            } = Xn(i),
            [h, g] = useState(0);
          if (!o || !e || h >= n.length) return null;
          const w = () => {
              g(h + 1), u();
            },
            { id: O, title: z, content: L } = n[h],
            A = d[O];
          if (!A || !A.elem) return null;
          let H = L;
          return (
            Array.isArray(L) &&
              (H = L.map((V, Z) => jsx("div", { children: V }, Z))),
            jsx(zl, {
              ...A,
              children: jsxs(xl, {
                tour: i,
                title: z,
                onRequestClose: c,
                children: [
                  H,
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
                            onClick: w,
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
        function zl(a) {
          const { elem: e, options: i, children: n } = a,
            { ownerWindow: o } = useBrowserContext(),
            u = e.getBoundingClientRect(),
            { style: c, position: d } = jl(o, u, i.position, i.offset);
          return createPortal(
            jsxs("div", {
              className: styles.TourPositioner,
              style: c,
              "data-position": d,
              children: [jsx(Wl, { position: d, targetRect: u }), n],
            }),
            o.document.body,
          );
        }
        function jl(a, e, i, n = 0) {
          let o,
            u = i;
          const c = 240,
            d = 10,
            h = n + pr,
            g = c + d + h;
          let w = a.document.body.matches(":dir(rtl)");
          switch (
            (w &&
              (u === "left" ? (u = "right") : u === "right" && (u = "left")),
            ((u === "left" && e.x < g) ||
              (u === "right" && a.innerWidth - (e.x + e.width) < g)) &&
              (u = "below"),
            u)
          ) {
            case "left":
              o = {
                top: e.top,
                width: e.left - d - h,
                left: d,
                minWidth: c,
                flexDirection: "row",
                justifyContent: "flex-end",
              };
              break;
            case "right":
              o = {
                top: e.top,
                left: e.right + h,
                right: d,
                minWidth: c,
                flexDirection: "row",
                justifyContent: "flex-start",
              };
              break;
            case "above":
              o = {
                top: d,
                height: e.y - d - h,
                left: e.x,
                flexDirection: "column",
                justifyContent: "flex-end",
              };
              break;
            default:
              w
                ? (o = {
                    top: e.y + e.height + h,
                    right: a.innerWidth - e.right,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  })
                : (o = {
                    top: e.y + e.height + h,
                    left: e.x,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  });
              break;
          }
          return {
            style: { ...o, ...{ display: "flex" } },
            position: u,
            rect: e,
          };
        }
        function xl(a) {
          const { tour: e, title: i, onRequestClose: n, children: o } = a,
            { onActivate: u } = Xn(e);
          return (
            useEffect(() => u(), [u]),
            jsxs("div", {
              className: styles.TourBox,
              children: [
                jsx("div", {
                  onClick: n,
                  className: styles.CloseButton,
                  children: jsx(X_Line, { className: styles.X }),
                }),
                jsx("div", { className: styles.Title, children: i }),
                jsx("div", { className: styles.Content, children: o }),
              ],
            })
          );
        }
        function Pl(a) {
          const { name: e, tour: i, options: n, children: o } = a,
            { updateStop: u } = Xn(i),
            c = (0, y.useCallback)((g) => u(i, e, n, g), [u, i, e]),
            d = y.Children.only(o),
            h = (0, Tl.Ue)(c, d.props.ref);
          return (0, y.cloneElement)(y.Children.only(o), { ref: h });
        }
        function Wl(a) {
          const { position: e, targetRect: i } = a;
          return jsx("svg", {
            viewBox: "0 0 28 10",
            className: styles.TourStopArrow,
            style: Fl(e, i),
            children: jsx("polygon", {
              points: "0,0 14,10 28,0",
              fill: "currentColor",
            }),
          });
        }
        const El = 28,
          pr = 10;
        function Fl(a, e) {
          const i = { width: `${El}px`, height: `${pr}px` };
          switch (a) {
            case "right":
              (i.left = "0px"),
                (i.top = `${Math.max(e.height / 2 - pr, pr)}px`);
              break;
            case "left":
              (i.right = "0px"),
                (i.top = `${Math.max(e.height / 2 - pr, pr)}px`);
              break;
            case "above":
              (i.bottom = `${-pr}px`),
                (i.insetInlineStart = `${Math.max(e.width / 2 - pr, pr)}px`);
              break;
            case "below":
              (i.top = `${-pr}px`),
                (i.insetInlineStart = `${Math.max(e.width / 2 - pr, pr)}px`);
          }
          return i;
        }
        function io() {
          const a = Is();
          return useCallback((e) => a.MarkTourUnseen(e), [a]);
        }
        var gi = x(62745);
        function kl(a) {
          const e = yt(),
            i = (0, M.q3)(() => e.GetVisibleTimelines());
          return (0, f.jsx)(f.Fragment, {
            children: i.flatMap((n) =>
              n.phaseOffsets.map((o, u) =>
                (0, y.createElement)(Dl, {
                  ...o,
                  timeline: n,
                  key: `${n.timelineID}_${u}`,
                }),
              ),
            ),
          });
        }
        function Dl(a) {
          const {
            timelineOffsetMS: e,
            nDurationMS: i,
            phase: n,
            timeline: o,
          } = a;
          return (0, f.jsxs)(Ll, {
            ...a,
            children: [
              (0, f.jsx)(Os, {}),
              (0, f.jsx)(Nl, {}),
              (0, f.jsx)(Os, {}),
            ],
          });
        }
        function Ll(a) {
          const {
              children: e,
              timeline: i,
              timelineOffsetMS: n,
              nDurationMS: o,
              phase: u,
            } = a,
            c = yt(),
            d = C(),
            h = Gr()?.valPX || -1,
            g = Ai(),
            [w] = Xi(),
            {
              pxStart: O,
              pxWidth: z,
              bHighlight: L,
            } = (0, M.q3)(() => {
              const et = c.GetPhaseToHighlight();
              return {
                pxStart: c.ConvertGlobalMSToGlobalPXOffset(
                  i.globalOffsetMS + n,
                ),
                pxWidth: c.ConvertDurationMSToDeltaPX(o),
                bHighlight:
                  et &&
                  et[0] === i.timelineID &&
                  et[1] === u.background_timeline_offset,
              };
            }),
            A = (g || w) && h >= O && h <= O + z,
            [H, V] = ye(),
            Z = () => {
              const et = d.GetLoader(),
                nt = et.GetTimelineData(i.timelineID),
                Mt = et.GetTimelineMetadata(i.timelineID),
                Ot = nt.m_rgPhases.find((ir) => parseInt(ir.time) === n);
              Ot && V({ entry: Ot, timeline: Mt });
            },
            it = () => V(void 0);
          return (0, f.jsx)("div", {
            className: (0, X.A)(
              gi.Positioner,
              A && gi.MouseWithin,
              L && gi.Highlight,
            ),
            style: { transform: `translateX( ${O}px )`, width: `${z}px` },
            onMouseOver: Z,
            onMouseLeave: it,
            onFocus: Z,
            onBlur: it,
            children: e,
          });
        }
        function Nl(a) {
          return (0, f.jsx)("div", { className: gi.Body });
        }
        function Os(a) {
          return (0, f.jsx)("div", { className: gi.Edge });
        }
        var Al = x(14296);
        function Xl(a) {
          const e = yt(),
            i = (0, M.q3)(() => e.GetVisibleTimelines());
          return (0, f.jsx)(f.Fragment, {
            children: i.map((n) =>
              (0, f.jsx)(Ul, { timeline: n }, n.timelineID),
            ),
          });
        }
        function Ul(a) {
          const { timeline: e } = a,
            i = yt(),
            n = (0, M.q3)(
              () => i.GetVisibleTimelineHighlights(e.timelineID) || [],
            ),
            o = (0, M.q3)(() => i.GetTimelineOffsetMS(e.timelineID)),
            u = e.globalOffsetMS - o;
          return (0, f.jsx)(f.Fragment, {
            children: n
              .filter((c) => Ms(c) === "range_highlight")
              .map((c) =>
                (0, f.jsx)(
                  Hl,
                  { entry: c, timeline: e, timelineView: i, timelineOffset: u },
                  c.id,
                ),
              ),
          });
        }
        function Hl(a) {
          const { timelineView: e, entry: i, timelineOffset: n } = a,
            o = n + parseInt(i.time),
            { pxStart: u, pxWidth: c } = (0, M.q3)(() => ({
              pxStart: e.ConvertGlobalMSToGlobalPXOffset(o),
              pxWidth: e.ConvertDurationMSToDeltaPX(parseInt(i.duration)),
            })),
            d = { width: `${c}px`, transform: `translateX( ${u}px )` };
          return (0, f.jsx)("svg", {
            className: Al.RangeHighlight,
            style: d,
            children: (0, f.jsx)("line", {
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
        const ri = 0.08;
        function $l(a) {
          const {
              loader: e,
              className: i,
              clipSummaries: n,
              refTimelineParentCtn: o,
              disableZoom: u,
            } = a,
            c = (0, M.q3)(() => e.BInitialized()),
            d = C();
          if (!c) return (0, f.jsx)("div", { className: _e.LoadingTimeline });
          let h = (0, X.A)(
            _e.ScrollAndControlsCtn,
            d.GetGamepadMode() && _e.GamepadMode,
            i,
          );
          return (0, f.jsx)(on, {
            loader: e,
            clipSummaries: n,
            playbackCoordinator: d,
            refTimelineParentCtn: o,
            children: (0, f.jsxs)("div", {
              className: h,
              dir: "ltr",
              children: [
                (0, f.jsx)(Zl, {}),
                (0, f.jsx)(ql, {}),
                (0, f.jsx)(Pl, {
                  tour: "recording_timeline",
                  name: "timeline",
                  options: { position: "left", offset: 20 },
                  children: (0, f.jsx)(cl, {
                    className: _e.TimelineScrollContainer,
                    disableZoom: u,
                    children: (0, f.jsx)(Kl, {}),
                  }),
                }),
              ],
            }),
          });
        }
        const Kl = (0, y.memo)(function (e) {
          const i = yt();
          return (0, M.q3)(() => i.BInitialized()) ? (0, f.jsx)(Vl, {}) : null;
        });
        function Vl() {
          const a = yt(),
            e = (0, M.q3)(() => a.GetScrollableWidthPX()),
            i = (0, M.q3)(() => a.GetVisualWindowStartPX()),
            n = (0, M.q3)(() => a.GetTimelineMarginWidth());
          return (0, f.jsxs)("div", {
            className: _e.ContentContainer,
            style: {
              minWidth: e || 0,
              marginRight: n,
              marginLeft: n,
              transform: `translateX(${-i}px)`,
            },
            children: [
              (0, f.jsx)(zr, {
                id: "recordings",
                className: _e.RecordingDecorators,
                children: (0, f.jsx)(rl, {}),
              }),
              (0, f.jsx)(zr, {
                id: "clips",
                className: _e.ClipDecorators,
                children: (0, f.jsx)(al, {}),
              }),
              (0, f.jsx)(zr, {
                id: "game_modes",
                className: _e.GameModes,
                children: (0, f.jsx)(da, {}),
              }),
              (0, f.jsx)(zr, {
                id: "date_decorators",
                className: _e.DateDecorator,
                children: (0, f.jsx)(tl, {}),
              }),
              (0, f.jsx)(zr, {
                id: "ticks",
                className: _e.BackgroundTicks,
                children: (0, f.jsx)(Qs, {}),
              }),
              (0, f.jsxs)(gn, {
                children: [
                  (0, f.jsx)(zr, {
                    id: "highlights",
                    className: _e.Highlights,
                    children: (0, f.jsx)(oa, {}),
                  }),
                  (0, f.jsx)(zr, {
                    id: "range_selection",
                    className: _e.RangeSelector,
                    children: (0, f.jsx)(Ka, {}),
                  }),
                  (0, f.jsx)(zr, {
                    id: "seek_scrub",
                    className: _e.SeekScrubber,
                    children: (0, f.jsx)(Xa, {}),
                  }),
                  (0, f.jsx)(zr, {
                    id: "play_head",
                    className: _e.PlayHead,
                    children: (0, f.jsx)(ha, {}),
                  }),
                  (0, f.jsx)(zr, {
                    id: "phases",
                    className: _e.Phases,
                    children: (0, f.jsx)(kl, {}),
                  }),
                  (0, f.jsx)(zr, {
                    id: "range_highlights",
                    className: _e.RangeHighlights,
                    children: (0, f.jsx)(Xl, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function zr(a) {
          const { children: e, id: i, className: n } = a;
          return (0, f.jsx)("div", {
            id: i,
            className: (0, X.A)(n, _e.AbsoluteLayer),
            children: (0, f.jsx)("div", {
              className: _e.RelativeLayer,
              children: e,
            }),
          });
        }
        function Zl(a) {
          const i = C().GetRenderGlyph();
          return i ? i(gs.pR.TRIGGER_LEFT, !1, !1, _e.PositionLeft) : null;
        }
        function ql(a) {
          const i = C().GetRenderGlyph();
          return i ? i(gs.pR.TRIGGER_RIGHT, !1, !1, _e.PositionRight) : null;
        }
        var zs = x(42577);
        function Jl(a) {
          const [e, i] = y.useState(!1);
          return (
            y.useEffect(() => {
              St(void 0, void 0).then(() => {
                i(!0);
              });
            }, []),
            (0, f.jsx)(f.Fragment, { children: e && (0, f.jsx)(js, { ...a }) })
          );
        }
        function js(a) {
          const { clipID: e } = a,
            i = Ql(e);
          return i.data
            ? (0, f.jsx)(Cl, { clip: i.data })
            : (0, f.jsx)("div", {
                style: { color: "white" },
                children: "Loading...",
              });
        }
        function Yl(a, e) {
          return {
            timeline_id: e.server_timeline_id,
            game_id: a.clip_id,
            date_recorded: a.date_recorded,
            duration_ms: a.duration_ms.toFixed(0),
            recordings: [],
          };
        }
        function Ql(a) {
          const e = (0, Wt.KV)();
          return (0, zt.I)({
            queryKey: ["grclip", a],
            queryFn: async () => {
              const i = lt.w.Init(bt);
              i.Body().set_clip_id(a);
              const n = await b.GetSingleSharedClip(e, i);
              if (n.GetEResult() != Et.R) {
                (0, ut.ZI)("GetSingleSharedClip failed"),
                  n.DEBUG_LogToConsole();
                return;
              }
              let o = n.Body().toObject().clip,
                u = [];
              if (o.video_ids.length == 0) {
                (0, ut.ZI)("No video ids in clip", a), n.DEBUG_LogToConsole();
                return;
              }
              let c;
              for (let d of o.video_ids)
                (!c || c.timeline_id != d.server_timeline_id) &&
                  ((c = Yl(o, d)), u.push(c)),
                  c.recordings.push({
                    recording_id: d.video_manager_video_id,
                    start_offset_ms: d.start_offset_ms.toFixed(0),
                    duration_ms: d.duration_ms.toFixed(0),
                    recording_type: _t,
                    cdn_manifest_url: d.manifest_url,
                  });
              return { clip_id: o.clip_id, game_id: o.gameid, timelines: u };
            },
          });
        }
        function xs(a) {
          const e = y.useMemo(() => cr(a), [a]),
            i = y.useCallback(
              (n) => {
                for (const o of a.timelines)
                  for (const u of o.recordings)
                    if (u.recording_id == n) return u.cdn_manifest_url;
              },
              [a],
            );
          return (
            y.useEffect(() => () => e && e.release(), [e]),
            { loader: e.loader, fnGetManifest: i }
          );
        }
        function Cl(a) {
          const { clip: e } = a,
            { loader: i, fnGetManifest: n } = xs(e);
          return (0, f.jsx)(f.Fragment, {
            children: (0, f.jsx)(Ke, {
              loader: i,
              fnGetManifest: n,
              mode: At.CommunityClip,
              children: (0, f.jsxs)("div", {
                className: zs.ClipDetails,
                children: [
                  (0, f.jsx)("div", {
                    className: zs.VideoContainer,
                    children: (0, f.jsx)(Hs, {
                      positionAbsolute: !1,
                      autoPlay: !0,
                    }),
                  }),
                  (0, f.jsx)($l, { loader: i }),
                ],
              }),
            }),
          });
        }
      },
      85443: (at, Ge, x) => {
        "use strict";
        x.d(Ge, {
          ZI: () => m,
          fX: () => lt,
          q_: () => zt,
          tG: () => r,
          tH: () => S,
          xv: () => P,
        });
        var f = x(57589);
        const y = new f.wd("GR");
        function Wt(j) {
          return (...$) => {
            const G = `[${(performance.now() / 1e3).toFixed(3)}]`;
            j(G, ...$);
          };
        }
        const zt = Wt(y.Debug),
          lt = Wt(y.Info),
          S = Wt(y.Warning),
          m = Wt(y.Error),
          r = zt;
        function P() {
          return y.IsDebugEnabled();
        }
      },
      67721: (at, Ge, x) => {
        "use strict";
        x.d(Ge, {
          In: () => j,
          N$: () => $,
          Te: () => lt,
          eJ: () => m,
          hT: () => zt,
          il: () => y,
          rU: () => R,
          sX: () => G,
          xz: () => P,
          zG: () => S,
        });
        var f = x(86578),
          y = ((k) => (
            (k[(k.Invalid = 0)] = "Invalid"),
            (k[(k.Playing = 1)] = "Playing"),
            (k[(k.Staging = 2)] = "Staging"),
            (k[(k.Menus = 3)] = "Menus"),
            k
          ))(y || {}),
          Wt = ((k) => (
            (k[(k.Invalid = 0)] = "Invalid"),
            (k[(k.None = 1)] = "None"),
            (k[(k.Standard = 2)] = "Standard"),
            (k[(k.Featured = 3)] = "Featured"),
            k
          ))(Wt || {});
        function zt(k) {
          return k.type === "gamemode";
        }
        function lt(k) {
          return k.type === "state_description";
        }
        function S(k) {
          return k.type === "event" && parseInt(k.duration) > 0;
        }
        function m(k) {
          return k.type === "event";
        }
        function r(k) {
          return k.type === "state_description";
        }
        function P(k) {
          return k.type === "achievement";
        }
        function j(k) {
          return k.type === "error";
        }
        function $(k) {
          return k.type === "usermarker";
        }
        function G(k) {
          return k.type === "screenshot";
        }
        function R(k) {
          let U = { id: k.entry_id, time: k.time, type: void 0 };
          switch (k.type) {
            case f.Bw.BA: {
              let N = U;
              (N.type = "gamemode"), (N.mode = k.game_mode);
              break;
            }
            case f.Bw.jL: {
              let N = U;
              (N.type = "usermarker"),
                (N.icon = "steam_marker"),
                (N.priority = k.marker_priority);
              break;
            }
            case f.Bw.P8: {
              let N = U;
              (N.type = "achievement"),
                (N.achievement_name = k.achievement_name);
              break;
            }
            case f.Bw.Ey: {
              let N = U;
              (N.type = "error"), (N.description = k.marker_description);
              break;
            }
            case f.Bw.Fy: {
              let N = U;
              (N.type = "state_description"), (N.title = k.timestamp_title);
              break;
            }
            case f.Bw.aI: {
              let N = U;
              (N.type = "event"),
                (N.icon = k.marker_icon),
                (N.title = k.range_title),
                (N.description = k.marker_description),
                (N.priority = k.marker_priority),
                (N.duration = k.range_duration),
                (N.possible_clip = k.range_possible_clip);
              break;
            }
            case f.Bw.uw: {
              let N = U;
              (N.type = "screenshot"),
                (N.icon = k.marker_icon),
                (N.priority = k.marker_priority),
                (N.handle = k.screenshot_handle);
              break;
            }
            default:
              return null;
          }
          return U;
        }
      },
      86347: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { OB: () => j, QP: () => R, Sb: () => f, sK: () => y });
        function f(J) {
          return { type: "global", valMS: J };
        }
        function y(J) {
          return { type: "timeline", valMS: J };
        }
        function Wt(J) {
          return { type: "recording", valMS: J };
        }
        function zt(J) {
          return { type: "clip", valMS: J };
        }
        function lt(J) {
          return (gt) => gt.type === J;
        }
        const S = lt("global"),
          m = lt("timeline"),
          r = lt("recording"),
          P = lt("clip");
        function j(J) {
          return { type: "global", valPX: J };
        }
        function $(J) {
          return { type: "clientWindow", valPX: J };
        }
        function G(J) {
          return { type: "virtualWindow", valPX: J };
        }
        function R(J) {
          return { type: "scrollWindow", valPX: J };
        }
        function k(J) {
          return (gt) => gt.type === J;
        }
        const U = k("global"),
          N = k("clientWindow"),
          _ = k("virtualWindow"),
          Y = k("scrollWindow");
      },
      85958: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { SX: () => ie, kh: () => mt });
        var f = x(41735),
          y = x.n(f),
          Wt = x(86578),
          zt = x(41635),
          lt = x(85443),
          S = x(67721),
          m = x(72604),
          r = x(36174),
          P = x(8323),
          j = x(27066),
          $ = x(86347),
          G = x(90626),
          R = x(14947),
          k = x(34843),
          U = x(85528),
          N = x(71742),
          _ = x(18210),
          Y = Object.defineProperty,
          J = Object.getOwnPropertyDescriptor,
          gt = (pt, b, v, M) => {
            for (
              var B = M > 1 ? void 0 : M ? J(b, v) : b, F = pt.length - 1, D;
              F >= 0;
              F--
            )
              (D = pt[F]) && (B = (M ? D(b, v, B) : D(B)) || B);
            return M && B && Y(b, v, B), B;
          };
        const bt = 10 * 1e3,
          mt = 3e3,
          dt = mt + 1e3,
          qt = class Ti {
            constructor() {
              (0, R.Gn)(this);
            }
            m_bInitialized = !1;
            m_rgListeners = [];
            m_gameID;
            m_clipID;
            m_ulFirstTimelineOffsetMS = 0;
            m_rgTimelineMetadata = [];
            m_mapTimelineData = new Map();
            m_mapRunningTimelines = new Map();
            m_schUpdateRunning = new P.LU();
            m_fnTimelineURLBuilder;
            BInitialized() {
              return this.m_bInitialized;
            }
            GetTimelines() {
              return this.m_rgTimelineMetadata;
            }
            GetTimelineMetadataIndex(b) {
              return this.m_rgTimelineMetadata.findIndex(
                (v) => v.metadata.timeline_id === b,
              );
            }
            GetTimelineMetadata(b) {
              return this.m_rgTimelineMetadata.find(
                (v) => v.metadata.timeline_id === b,
              );
            }
            GetGameID() {
              return this.m_gameID;
            }
            GetClipID() {
              return this.m_clipID;
            }
            BIsTimelineRunning(b) {
              return this.m_mapRunningTimelines.has(b);
            }
            AddEventListener(b) {
              return (
                this.m_rgListeners.push(b), () => zt.x9(this.m_rgListeners, b)
              );
            }
            async LoadTimelinesForBackgroundVideo(b) {
              this.m_gameID = b;
              const v = await Wt.xM.GetTimelinesForApp({ game_id: b }),
                { timelines: M = [] } = v.Body().toObject();
              this.m_mapRunningTimelines.forEach((B, F) => {
                M.find((D) => D.timeline_id == F) || M.push(B.m_metadata);
              }),
                this.UpdateTimelineMetadata(M),
                (this.m_fnTimelineURLBuilder = (B) =>
                  `https://steamloopback.host/gamerecordings/timelines/${B}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            async LoadTimelinesForClip(b) {
              this.m_clipID = b;
              const v = await Wt.xM.GetTimelinesForClip({ clip_id: b });
              if (v.GetEResult() != m.R)
                throw new Error("Unable to load clip " + b);
              const {
                timelines: M = [],
                game_id: B,
                first_timeline_start_offset_ms: F,
              } = v.Body().toObject();
              (this.m_gameID = B), this.UpdateTimelineMetadata(M);
              for (let D of this.m_rgTimelineMetadata) {
                (0, lt.q_)(
                  `Loaded clip ${b} timeline ${D.metadata.timeline_id}`,
                );
                for (let K of D.metadata.recordings)
                  (0, lt.q_)(
                    `Clip recording ${K.recording_id} duration ${K.duration_ms}`,
                  );
              }
              (this.m_ulFirstTimelineOffsetMS = parseInt(F)),
                (this.m_fnTimelineURLBuilder = (D) =>
                  `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${D}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            UpdateTimelineMetadata(b) {
              const v = b
                .slice()
                .sort((D, K) => D.date_recorded - K.date_recorded);
              let M = [],
                B = 0;
              const F = {};
              v.forEach((D) => {
                if ((D.recordings || (D.recordings = []), F[D.timeline_id])) {
                  console.error(
                    "Duplicate timelines found in UpdateTimelineMetadata()",
                    D.timeline_id,
                    b,
                  );
                  return;
                }
                M.push({ nGlobalOffsetMS: (0, $.Sb)(B), metadata: D }),
                  (B += parseInt(D.duration_ms)),
                  (F[D.timeline_id] = !0);
              }),
                (this.m_rgTimelineMetadata = M);
            }
            LoadTimelinesForSharedClip(b) {
              this.SetPreloadedTimelines(
                0,
                b.clip_id,
                b.game_id,
                b.timelines,
                void 0,
              );
            }
            LoadTimelinesForTestGame(b, v) {
              const M = (B) =>
                `https://steamloopback.host/gamerecordings/timelines/${B}.json`;
              this.SetPreloadedTimelines(0, void 0, b, v, M);
            }
            LoadTimelinesForTestClip(b, v, M, B) {
              this.SetPreloadedTimelines(b, v, M, B, void 0);
            }
            SetPreloadedTimelines(b, v, M, B, F) {
              (this.m_gameID = M),
                (this.m_clipID = v),
                (this.m_ulFirstTimelineOffsetMS = b);
              const D = B.slice();
              this.m_mapRunningTimelines.forEach((K, W) => {
                D.find((St) => St.timeline_id == W) || D.push(K.m_metadata);
              }),
                this.UpdateTimelineMetadata(D),
                (this.m_fnTimelineURLBuilder = F),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            FireEvent(b, ...v) {
              for (let M of this.m_rgListeners) {
                let B = M[b];
                B instanceof Function && B.apply(M, v);
              }
            }
            async LoadTimelineData(b) {
              let v = this.m_mapTimelineData.get(b);
              if (v && v.m_strState === "loading") {
                await v.m_promise;
                return;
              }
              if (
                (v && v.m_strState == "error") ||
                (this.IsActiveTimeline(b) && v.m_strState == "loaded")
              )
                return;
              const M = {
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (!this.m_fnTimelineURLBuilder)
                this.m_mapTimelineData.set(b, { m_strState: "loaded", ...M });
              else {
                const B = this.m_fnTimelineURLBuilder(b),
                  F = y()
                    .get(B, { withCredentials: !1 })
                    .then(
                      (D) => {
                        if (D.status == 200 && D.data) {
                          ne(D.data);
                          const K = this.ProcessTimelineEntries(D.data);
                          this.m_mapTimelineData.set(b, K);
                        } else
                          this.m_mapTimelineData.set(b, {
                            ...M,
                            m_strState: "error",
                          });
                      },
                      (D) => {
                        this.m_mapTimelineData.set(b, {
                          ...M,
                          m_strState: "error",
                        });
                      },
                    )
                    .finally(() => this.FireEvent("OnTimelineLoaded", b));
                this.m_mapTimelineData.set(b, {
                  m_strState: "loading",
                  m_promise: F,
                  ...M,
                });
              }
            }
            ProcessTimelineEntries(b) {
              let v = {
                m_strState: "loaded",
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (b.entries) {
                const M = [],
                  B = [],
                  F = [],
                  D = [];
                for (const W of b.entries)
                  switch (W.type) {
                    case "phase":
                      F.push(W);
                      break;
                    case "gamemode":
                      M.push(W);
                      break;
                    case "state_description":
                      B.push(W);
                      break;
                    case "achievement":
                    case "error":
                    case "event":
                    case "screenshot":
                    case "usermarker":
                      D.push(W);
                      break;
                    default:
                      console.error(`Unknown timeline entry type ${W.type}`);
                  }
                const K = (W, St) => parseInt(W.time) - parseInt(St.time);
                (v.m_rgGameModeChanges = M.sort(K)),
                  (v.m_rgStateDescriptions = B.sort(K)),
                  (v.m_rgPhases = F.sort(K)),
                  (v.m_rgEntries = D.sort(K)),
                  v.m_rgGameModeChanges.length > 0 &&
                    parseInt(v.m_rgGameModeChanges[0].time) < bt &&
                    (v.m_rgGameModeChanges[0].time = "0");
              }
              return v;
            }
            static ApplyTimelineRounding(b, v) {
              if (v === 0) return b;
              const M = b % v;
              return M == 0 ? b : b + (v - M);
            }
            FindTimelineAtOffset(b, v) {
              const M = b + this.m_ulFirstTimelineOffsetMS;
              let B = 0;
              for (let F of this.m_rgTimelineMetadata) {
                const D = this.GetTimelineStartBeforeGlobalZeroMS(
                  F.metadata.timeline_id,
                );
                let K = parseInt(F.metadata.duration_ms) + D;
                if (B + K > M)
                  return {
                    timeline: F,
                    nTimelineOffsetMS: M - B,
                    ulGlobalToTimelineOffset: D,
                  };
                B += Ti.ApplyTimelineRounding(K, v);
              }
              return null;
            }
            GetGlobalOffsetDataForTimeline(b, v) {
              let M = 0;
              for (let B of this.m_rgTimelineMetadata) {
                let F = parseInt(B.metadata.duration_ms),
                  D = Ti.ApplyTimelineRounding(F, v);
                if (B.metadata.timeline_id == b)
                  return { nGlobalOffsetMS: M, nRoundedDurationMS: D };
                M += D;
              }
              return null;
            }
            CreateGlobalRangeForTimeline(b, v, M, B) {
              let F = v - M,
                D = v + B;
              return this.ClampGlobalRangeToTimeline(b, F, D);
            }
            ClampGlobalRangeToTimeline(b, v, M) {
              let B = this.GetGlobalOffsetDataForTimeline(b, 0);
              if (!B) return [0, 0];
              let F = Math.max(v, B.nGlobalOffsetMS),
                D = Math.min(M, B.nGlobalOffsetMS + B.nRoundedDurationMS - 1);
              return [F, D];
            }
            GetTimelineOffsetFromGlobal(b, v) {
              const M = this.m_ulFirstTimelineOffsetMS + b;
              let B = 0;
              for (let F of this.m_rgTimelineMetadata) {
                const D = this.GetTimelineStartBeforeGlobalZeroMS(
                    F.metadata.timeline_id,
                  ),
                  K = parseInt(F.metadata.duration_ms) + D,
                  W = Ti.ApplyTimelineRounding(K, v);
                if (M < B + W)
                  return {
                    strTimelineID: F.metadata.timeline_id,
                    nTimelineOffsetMS: (0, $.sK)(M - B - D),
                  };
                B += K;
              }
              return {
                strTimelineID: void 0,
                nTimelineOffsetMS: (0, $.sK)(NaN),
              };
            }
            ConvertRecordingOffsetToGlobalOffset(b, v, M) {
              let B = 0;
              for (let F of this.m_rgTimelineMetadata) {
                let D = parseInt(F.metadata.duration_ms);
                const K = this.GetTimelineStartBeforeGlobalZeroMS(
                  F.metadata.timeline_id,
                );
                let W = Ti.ApplyTimelineRounding(D, M);
                for (let St of F.metadata.recordings)
                  if (St.recording_id === b) {
                    let je =
                      (isNaN(parseInt(St.recording_zero_timeline_offset_ms))
                        ? 0
                        : parseInt(St.recording_zero_timeline_offset_ms) - K) +
                      v;
                    return (
                      (B += je),
                      {
                        nGlobalOffsetMS: B,
                        nRoundedDurationMS: W,
                        strTimelineID: F.metadata.timeline_id,
                        nTimelineOffsetMS: je,
                      }
                    );
                  }
                B += W;
              }
              return null;
            }
            IsActiveTimeline(b) {
              return b ? this.m_mapRunningTimelines.has(b) : !1;
            }
            MakeRelativeToTimelineEndIfActive(b, v) {
              if (!this.IsActiveTimeline(b)) return v;
              const M = this.GetTimelineMetadata(b);
              if (!M) return v;
              let B = parseInt(M.metadata.duration_ms);
              return Math.min(v - B, 0);
            }
            IsActiveRecording(b) {
              for (let v of this.m_rgTimelineMetadata)
                for (let M of v.metadata.recordings)
                  if (M.recording_id === b) {
                    const B = this.m_mapRunningTimelines.get(
                      v.metadata.timeline_id,
                    );
                    return B && B.m_runningRecording
                      ? B.m_runningRecording.recording_id === b
                      : !1;
                  }
              return !1;
            }
            GetRunningTimelineDurationMS(b) {
              let v = this.m_mapRunningTimelines.get(b);
              if (!v) return 0;
              let M =
                  performance.now() -
                  v.m_perfCounterStart +
                  v.m_nPerfCounterOffsetMS,
                B = parseInt(v.m_metadata.duration_ms) || 0;
              return Math.max(M, B);
            }
            GetRunningTimelineForRecording(b, v) {
              const M = this.m_mapRunningTimelines.get(b);
              return M &&
                M.m_runningRecording &&
                M.m_runningRecording.recording_id === v
                ? M
                : null;
            }
            ConvertGlobaOffsetToRecordingAndRelativeOffset(b) {
              if (!this.m_bInitialized) return null;
              let v = this.FindTimelineAtOffset(b, 0);
              if (!v) return null;
              let M = v.nTimelineOffsetMS - v.ulGlobalToTimelineOffset;
              for (let B of v.timeline.metadata.recordings) {
                let F = parseInt(B.start_offset_ms);
                if (F + parseInt(B.duration_ms) < M || F > M) continue;
                let K = parseInt(B.recording_zero_timeline_offset_ms),
                  W = Math.max(M - F, 0);
                return (
                  isNaN(K) || (W = Math.max(v.nTimelineOffsetMS - K, 0)),
                  {
                    strRecordingID: B.recording_id,
                    nRecordingOffsetMS: W,
                    nStartOffsetMS: F,
                  }
                );
              }
              return null;
            }
            async FindRecordingAndOffsetForEntry(b) {
              for (const v of this.m_mapRunningTimelines.keys()) {
                if (!this.IsActiveTimeline(v)) continue;
                await this.LoadTimelineData(v);
                const M = this.m_mapTimelineData.get(v),
                  B = this.m_mapRunningTimelines.get(v);
                if (!(!M || !B)) {
                  for (const F of M.m_rgEntries)
                    if (F.id == b) {
                      const D = parseInt(F.time);
                      for (const K of B.m_metadata.recordings) {
                        const W = parseInt(K.start_offset_ms),
                          St = W + parseInt(K.duration_ms);
                        if (D >= W && D <= St)
                          return {
                            strRecordingID: K.recording_id,
                            nRecordingOffsetMS: D,
                            nStartOffsetMS: W,
                          };
                      }
                    }
                  break;
                }
              }
            }
            GetClosestNextRecordingInGlobalTimeline(b) {
              for (let v of this.m_rgTimelineMetadata)
                for (let M of v.metadata.recordings)
                  if (
                    parseInt(M.start_offset_ms) + v.nGlobalOffsetMS.valMS >
                    b.valMS
                  )
                    return M;
              return null;
            }
            GetClosestPreviousRecordingInGlobalTimeline(b) {
              let v = null;
              for (let M of this.m_rgTimelineMetadata)
                for (let B of M.metadata.recordings) {
                  if (
                    parseInt(B.start_offset_ms) + M.nGlobalOffsetMS.valMS >
                    b.valMS
                  )
                    return v;
                  v = B;
                }
              return v;
            }
            ConvertRecordingTimeMStoPreTrimTimeMS(b, v) {
              for (let M of this.m_rgTimelineMetadata)
                for (let B of M.metadata.recordings)
                  if (B.recording_id === b) {
                    const F = parseInt(B.recording_zero_timeline_offset_ms),
                      D = this.GetTimelineStartBeforeGlobalZeroMS(
                        M.metadata.timeline_id,
                      );
                    return !D || isNaN(F) ? v : v + D - F;
                  }
              return v;
            }
            GetTimelineDataOrStartLoad(b) {
              if (!b) return null;
              let v = this.m_mapTimelineData.get(b);
              return (
                v ||
                  (this.LoadTimelineData(b),
                  (v = this.m_mapTimelineData.get(b))),
                v
              );
            }
            GetTimelineData(b) {
              return this.m_mapTimelineData.get(b);
            }
            SetTimelineData(b, v) {
              const M = this.ProcessTimelineEntries(v);
              this.m_mapTimelineData.set(b, M);
            }
            GetClosestPreviousEntryInTimeline(b, v) {
              const M = this.GetTimelineMetadata(b),
                B = this.GetTimelineStartBeforeGlobalZeroMS(b),
                F = this.GetTimelineDataOrStartLoad(b);
              let D = null;
              if (F && F.m_strState === "loaded") {
                const K = F.m_rgEntries.filter((St) => {
                    const vt = parseInt(St.time),
                      je = B + parseInt(M.metadata.duration_ms);
                    return vt < je && vt > B;
                  }),
                  W = zt.rJ(K, (St) => v.valMS - 1 - parseInt(St.time));
                W !== -1 && (D = K[W]);
              }
              return { entry: D, timelineState: F?.m_strState };
            }
            GetClosestNextEntryInTimeline(b, v) {
              const M = this.GetTimelineMetadata(b),
                B = this.GetTimelineStartBeforeGlobalZeroMS(b),
                F = this.GetTimelineDataOrStartLoad(b);
              let D = null;
              if (F && F.m_strState === "loaded") {
                const K = F.m_rgEntries.filter((St) => {
                    const vt = parseInt(St.time),
                      je = B + parseInt(M.metadata.duration_ms);
                    return vt < je && vt > B;
                  }),
                  W = zt.rJ(K, (St) => v.valMS - parseInt(St.time));
                W < K.length - 1 && (D = K[W + 1]);
              }
              return { entry: D, timelineState: F?.m_strState };
            }
            GetClosestPreviousEntryInGlobalTimeline(b) {
              const v = this.GetTimelineOffsetFromGlobal(b, 0),
                M = this.GetTimelineData(v.strTimelineID);
              if (!M || M.m_strState !== "loaded")
                return {
                  timelineID: v?.strTimelineID,
                  timelineState: M?.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const B = this.GetTimelineStartBeforeGlobalZeroMS(
                  v.strTimelineID,
                ),
                F = v.nTimelineOffsetMS.valMS + B,
                D = zt.rJ(M.m_rgEntries, (W) => F - parseInt(W.time));
              if (D !== -1) {
                const W = M.m_rgEntries[D],
                  vt =
                    this.GetTimelineMetadata(v.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    B +
                    parseInt(W.time);
                return vt < 0
                  ? {
                      timelineID: v.strTimelineID,
                      timelineState: M.m_strState,
                      entry: null,
                      globalMS: null,
                    }
                  : {
                      timelineID: v.strTimelineID,
                      timelineState: M.m_strState,
                      entry: W,
                      globalMS: (0, $.Sb)(vt),
                    };
              }
              let K = this.GetTimelineMetadataIndex(v.strTimelineID);
              if (K < 1)
                return {
                  timelineID: v.strTimelineID,
                  timelineState: M.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let W = K - 1; W >= 0; W--) {
                const St = this.m_rgTimelineMetadata[W],
                  vt = this.GetTimelineData(St.metadata.timeline_id);
                if (vt) {
                  if (vt.m_strState !== "loaded")
                    return {
                      timelineID: St.metadata.timeline_id,
                      timelineState: vt.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (vt.m_rgEntries.length) {
                    const je = vt.m_rgEntries[vt.m_rgEntries.length - 1],
                      er = this.GetTimelineStartBeforeGlobalZeroMS(
                        St.metadata.timeline_id,
                      ),
                      Er = St.nGlobalOffsetMS.valMS - er + parseInt(je.time);
                    return Er < 0
                      ? {
                          timelineID: St.metadata.timeline_id,
                          timelineState: vt.m_strState,
                          entry: null,
                          globalMS: null,
                        }
                      : {
                          timelineID: St.metadata.timeline_id,
                          timelineState: vt.m_strState,
                          entry: je,
                          globalMS: (0, $.Sb)(Er),
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
            GetClosestNextEntryInGlobalTimeline(b) {
              const v = this.GetTimelineOffsetFromGlobal(b, 0),
                M = this.GetTimelineData(v.strTimelineID);
              if (!M || M.m_strState !== "loaded")
                return {
                  timelineID: v?.strTimelineID,
                  timelineState: M?.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const B = this.GetTimelineStartBeforeGlobalZeroMS(
                  v.strTimelineID,
                ),
                F = v.nTimelineOffsetMS.valMS + B,
                K = zt.rJ(M.m_rgEntries, (vt) => F - parseInt(vt.time)) + 1;
              if (K <= M.m_rgEntries.length - 1) {
                const vt = M.m_rgEntries[K],
                  er =
                    this.GetTimelineMetadata(v.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    B +
                    parseInt(vt.time);
                return er < this.GetGlobalTimelineEndMS().valMS
                  ? {
                      timelineID: v.strTimelineID,
                      timelineState: M.m_strState,
                      entry: vt,
                      globalMS: (0, $.Sb)(er),
                    }
                  : {
                      timelineID: v.strTimelineID,
                      timelineState: M.m_strState,
                      entry: null,
                      globalMS: null,
                    };
              }
              const W = this.m_rgTimelineMetadata.length;
              let St = this.GetTimelineMetadataIndex(v.strTimelineID);
              if (St === -1 || St === W - 1)
                return {
                  timelineID: v.strTimelineID,
                  timelineState: M.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let vt = St + 1; vt < W; vt++) {
                const je = this.m_rgTimelineMetadata[vt],
                  er = this.GetTimelineData(je.metadata.timeline_id);
                if (er) {
                  if (er.m_strState !== "loaded")
                    return {
                      timelineID: je.metadata.timeline_id,
                      timelineState: er.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (er.m_rgEntries.length) {
                    const Er = er.m_rgEntries[0],
                      Jr = this.GetTimelineStartBeforeGlobalZeroMS(
                        je.metadata.timeline_id,
                      ),
                      cr = je.nGlobalOffsetMS.valMS - Jr + parseInt(Er.time);
                    return cr < this.GetGlobalTimelineEndMS().valMS
                      ? {
                          timelineID: je.metadata.timeline_id,
                          timelineState: er.m_strState,
                          entry: Er,
                          globalMS: (0, $.Sb)(cr),
                        }
                      : {
                          timelineID: je.metadata.timeline_id,
                          timelineState: er.m_strState,
                          entry: null,
                          globalMS: null,
                        };
                  }
                }
              }
              return {
                timelineID:
                  this.m_rgTimelineMetadata[W - 1].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            FindRangeEventsAtGlobalMS(b) {
              const v = this.GetTimelineOffsetFromGlobal(b, 0),
                M = this.GetTimelineDataOrStartLoad(v.strTimelineID);
              if (!M || M.m_strState !== "loaded") return [];
              const B = [];
              for (const F of M.m_rgEntries) {
                if (parseInt(F.time) > v.nTimelineOffsetMS.valMS) break;
                if (F.type !== "event" || parseInt(F.duration) == 0) continue;
                const D = parseInt(F.time),
                  K = D + parseInt(F.duration);
                D <= v.nTimelineOffsetMS.valMS &&
                  K >= v.nTimelineOffsetMS.valMS &&
                  B.push(F);
              }
              return B;
            }
            GetStateDescriptionAtGlobalMS(b) {
              const v = this.GetTimelineOffsetFromGlobal(b.valMS, 0),
                M = this.GetTimelineDataOrStartLoad(v.strTimelineID);
              if (!M || M.m_strState !== "loaded") return null;
              const B = zt.rJ(
                M.m_rgStateDescriptions,
                (F) => v.nTimelineOffsetMS.valMS - parseInt(F.time),
              );
              return B > -1 ? M.m_rgStateDescriptions[B] : null;
            }
            AdvanceGameModeIndex(b) {
              let v = b.m_iGameModeChanges;
              for (; v + 1 < b.m_data.m_rgGameModeChanges.length; ) {
                let M = b.m_data.m_rgGameModeChanges[v + 1];
                if (parseInt(M.time) > b.m_nTimelineOffsetMS) break;
                v++;
              }
              b.m_iGameModeChanges = v;
            }
            AdvanceEntriesIndex(b) {
              for (
                b.m_iEntries == -1 && b.m_iEntries++;
                b.m_iEntries < b.m_data.m_rgEntries.length;
              ) {
                let v = b.m_data.m_rgEntries[b.m_iEntries];
                if (parseInt(v.time) >= b.m_nTimelineOffsetMS) break;
                b.m_iEntries++;
              }
            }
            CreateTimelineIterator(b, v) {
              let M = this.FindTimelineAtOffset(b, v);
              if (!M)
                return {
                  m_timeline: null,
                  m_data: null,
                  m_nTimelineOffsetMS: 0,
                  m_iGameModeChanges: -1,
                  m_iEntries: -1,
                };
              let B = this.GetTimelineDataOrStartLoad(
                  M.timeline.metadata.timeline_id,
                ),
                F = -1,
                D = -1;
              if (B?.m_strState == "loaded") {
                let W = (St) => M.ulGlobalToTimelineOffset - parseInt(St.time);
                (F = zt.rJ(B.m_rgGameModeChanges, W)),
                  (D = zt.rJ(B.m_rgEntries, W));
              }
              let K = {
                m_timeline: M.timeline.metadata,
                m_data: B,
                m_nTimelineOffsetMS: Math.max(M.ulGlobalToTimelineOffset, 0),
                m_iGameModeChanges: F,
                m_iEntries: D,
              };
              return (
                this.AdvanceEntriesIndex(K), this.AdvanceGameModeIndex(K), K
              );
            }
            HasIteratorReachedEnd(b) {
              return !b.m_timeline;
            }
            AdvanceIterator(b, v) {
              let M = parseInt(b.m_timeline.duration_ms);
              if (
                b.m_nTimelineOffsetMS + v <
                M + this.m_ulFirstTimelineOffsetMS
              ) {
                (b.m_nTimelineOffsetMS += v),
                  this.AdvanceEntriesIndex(b),
                  this.AdvanceGameModeIndex(b);
                return;
              }
              let B = this.m_rgTimelineMetadata.findIndex(
                (F) => F.metadata == b.m_timeline,
              );
              if (B < 0 || B == this.m_rgTimelineMetadata.length - 1) {
                b.m_timeline = null;
                return;
              }
              B++,
                (b.m_timeline = this.m_rgTimelineMetadata[B].metadata),
                (b.m_data = this.GetTimelineDataOrStartLoad(
                  b.m_timeline.timeline_id,
                )),
                (b.m_nTimelineOffsetMS = 0),
                (b.m_iGameModeChanges = 0),
                (b.m_iEntries = 0);
            }
            GetIteratorTimelineState(b) {
              return b.m_data.m_strState;
            }
            GetIteratorGameMode(b) {
              return b.m_iGameModeChanges < 0 ||
                b.m_iGameModeChanges >= b.m_data.m_rgGameModeChanges.length
                ? S.il.Playing
                : b.m_data.m_rgGameModeChanges[b.m_iGameModeChanges].mode;
            }
            *GetIteratorEntriesWithin(b, v) {
              let M = b.m_data.m_rgEntries;
              for (let B = b.m_iEntries; B >= 0 && B < M.length; B++) {
                let F = M[B];
                if (parseInt(F.time) >= b.m_nTimelineOffsetMS + v) break;
                yield F;
              }
            }
            *GetIteratorGameModesWithin(b, v) {
              let M = b.m_data.m_rgGameModeChanges;
              for (let B = b.m_iEntries; B >= 0 && B < M.length; B++) {
                let F = M[B];
                if (parseInt(F.time) >= b.m_nTimelineOffsetMS + v) break;
                yield F;
              }
            }
            GetFirstRecording() {
              if (!this.m_bInitialized) return "";
              const b = this.m_rgTimelineMetadata[0];
              if (!b) return "";
              const v = b.metadata.recordings[0];
              return v ? v.recording_id : "";
            }
            GetFirstRecordingOfLastTimelineSession() {
              if (!this.m_bInitialized) return "";
              const b =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (!b) return "";
              const v = b.metadata.recordings[0];
              return v ? v.recording_id : "";
            }
            GetNextRecording(b) {
              if (!this.m_bInitialized || !b) return "";
              let v = !1;
              for (let M of this.m_rgTimelineMetadata)
                for (let B of M.metadata.recordings) {
                  if (v) return B.recording_id;
                  B.recording_id == b && (v = !0);
                }
              return "";
            }
            BRecordingHasZeroOffset(b) {
              if (!this.m_bInitialized) return !1;
              for (let v of this.m_rgTimelineMetadata)
                for (let M of v.metadata.recordings)
                  if (M.recording_id == b)
                    return !isNaN(
                      parseInt(M.recording_zero_timeline_offset_ms),
                    );
              return !1;
            }
            GetTimelineDateMS(b, v) {
              if (!this.m_bInitialized) return 0;
              let M = this.FindTimelineAtOffset(b, v);
              return M
                ? M.timeline.metadata.date_recorded * 1e3 + M.nTimelineOffsetMS
                : 0;
            }
            InsertEntryIntoTimelineSorted(b, v) {
              let M = (B, F) => parseInt(B.time) - parseInt(F.time);
              zt.Xr(b.m_rgEntries, v, M);
            }
            AddEventToTimeline(b, v, M, B, F, D, K, W) {
              if (!this.m_bInitialized)
                return (
                  (0, lt.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const St = this.m_mapTimelineData.get(b);
              if (!St) return (0, lt.ZI)(`failed to find timeline ${b}`), !1;
              const vt = v + this.GetTimelineStartBeforeGlobalZeroMS(b),
                je = {
                  id: B,
                  time: vt + "",
                  type: "event",
                  icon: M,
                  title: D,
                  description: K,
                  priority: F,
                  duration: `${W}`,
                  possible_clip: 2,
                };
              return (
                (0, lt.tG)(`adding timeline event marker at ${b} at ${vt} MS`),
                this.InsertEntryIntoTimelineSorted(St, je),
                this.FireEvent("OnInvalidate", b),
                !0
              );
            }
            RemoveTimelineEvent(b, v) {
              if (!this.m_bInitialized)
                return (
                  (0, lt.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const M = this.m_mapTimelineData.get(b);
              if (!M) return (0, lt.ZI)(`failed to find timeline ${b}`), !1;
              const B = M.m_rgEntries.findIndex((F) => F.id === v);
              return B < 0
                ? ((0, lt.ZI)(`failed to find entry by id: ${v}`), !1)
                : (M.m_rgEntries.splice(B, 1),
                  this.FireEvent("OnInvalidate", b),
                  !0);
            }
            AddUserMarker(b, v, M, B) {
              if (!this.m_bInitialized)
                return (
                  (0, lt.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const F = this.m_mapTimelineData.get(b);
              if (!F) return (0, lt.ZI)(`failed to find timeline ${b}`), !1;
              const D = v + this.GetTimelineStartBeforeGlobalZeroMS(b),
                K = {
                  id: B,
                  time: D + "",
                  type: "usermarker",
                  icon: M,
                  title: "",
                  description: "",
                  priority: 0,
                };
              return (
                (0, lt.tG)(`adding user marker at ${b} at ${D} MS`),
                this.InsertEntryIntoTimelineSorted(F, K),
                this.FireEvent("OnInvalidate", b),
                !0
              );
            }
            UpdateUserMarker(b, v, M) {
              if (!this.m_bInitialized)
                return (
                  (0, lt.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const B = this.m_mapTimelineData.get(b);
              if (!B) return (0, lt.ZI)(`failed to find timeline ${b}`), !1;
              const F = B.m_rgEntries.findIndex((W) => W.id === v);
              if (F < 0)
                return (0, lt.ZI)(`failed to find entry by id: ${v}`), !1;
              const D = B.m_rgEntries[F],
                K = D.time;
              return (
                (D.icon = M.strIcon),
                (D.time = "" + M.nTimelineOffsetMS),
                (D.title = M.name),
                (D.description = M.description),
                K != D.time &&
                  (B.m_rgEntries.splice(F, 1),
                  this.InsertEntryIntoTimelineSorted(B, D)),
                this.FireEvent("OnInvalidate", b),
                !0
              );
            }
            RemoveUserMarker(b, v) {
              if (!this.m_bInitialized)
                return (
                  (0, lt.ZI)("timeline loader not initialized, unexpected"), !1
                );
              const M = this.m_mapTimelineData.get(b);
              if (!M) return (0, lt.ZI)(`failed to find timeline ${b}`), !1;
              const B = M.m_rgEntries.findIndex((F) => F.id === v);
              return B < 0
                ? ((0, lt.ZI)(`failed to find entry by id: ${v}`), !1)
                : (M.m_rgEntries.splice(B, 1),
                  this.FireEvent("OnInvalidate", b),
                  !0);
            }
            AddRunningTimeline(b, v, M) {
              if (
                this.m_rgTimelineMetadata.find(
                  (W) => W.metadata.timeline_id == b,
                )
              )
                return;
              const B = {
                  timeline_id: b,
                  game_id: v,
                  date_recorded: M,
                  recordings: [],
                },
                F =
                  this.m_rgTimelineMetadata[
                    this.m_rgTimelineMetadata.length - 1
                  ],
                D = F
                  ? F.nGlobalOffsetMS.valMS + parseInt(F.metadata.duration_ms)
                  : 0;
              zt.Xr(
                this.m_rgTimelineMetadata,
                { nGlobalOffsetMS: (0, $.Sb)(D), metadata: B },
                (W, St) => W.metadata.date_recorded - St.metadata.date_recorded,
              ),
                this.m_mapTimelineData.set(b, {
                  m_strState: "loaded",
                  m_rgGameModeChanges: [],
                  m_rgStateDescriptions: [],
                  m_rgEntries: [],
                  m_rgPhases: [],
                });
              let K = {
                m_metadata: B,
                m_globalStartMS: D,
                m_perfCounterStart: performance.now(),
                m_nPerfCounterOffsetMS: Math.max(0, (0, r._2)() - M) * 1e3,
                m_runningRecording: null,
              };
              this.m_mapRunningTimelines.set(b, K),
                this.m_schUpdateRunning.IsScheduled() ||
                  this.m_schUpdateRunning.Schedule(
                    dt,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", b);
            }
            UpdateRunningTimelines() {
              let b;
              this.m_mapRunningTimelines.forEach((v) => {
                b = v.m_metadata.timeline_id;
                let M =
                    performance.now() -
                    v.m_perfCounterStart +
                    v.m_nPerfCounterOffsetMS,
                  B = parseInt(v.m_metadata.duration_ms) || 0;
                M > B && (v.m_metadata.duration_ms = M.toString());
              }),
                this.m_mapRunningTimelines.size > 0 &&
                  this.m_schUpdateRunning.Schedule(
                    dt,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", b);
            }
            RunningTimelineStopped(b, v) {
              let M = this.m_mapRunningTimelines.get(b);
              M &&
                ((M.m_metadata.duration_ms = v),
                this.m_mapRunningTimelines.delete(b),
                this.FireEvent("OnInvalidate", b));
            }
            AddRunningTimelineEntry(b) {
              let v = this.m_mapRunningTimelines.get(b.timeline_id),
                M = this.m_mapTimelineData.get(b.timeline_id);
              if (!v || !M) return;
              let B = (0, S.rU)(b);
              if (!B) return;
              (0, S.hT)(B)
                ? zt.Xr(
                    M.m_rgGameModeChanges,
                    B,
                    (K, W) => parseInt(K.time) - parseInt(W.time),
                  )
                : (0, S.Te)(B)
                  ? zt.Xr(
                      M.m_rgStateDescriptions,
                      B,
                      (K, W) => parseInt(K.time) - parseInt(W.time),
                    )
                  : zt.Xr(
                      M.m_rgEntries,
                      B,
                      (K, W) => parseInt(K.time) - parseInt(W.time),
                    );
              let F = parseInt(v.m_metadata.duration_ms) || 0,
                D = parseInt(b.time);
              F < D && (v.m_metadata.duration_ms = D.toString()),
                this.FireEvent("OnInvalidate", b.timeline_id);
            }
            TimelineDeleted(b) {
              const M = this.m_rgTimelineMetadata
                .filter((B) => B.metadata.timeline_id !== b)
                .map((B) => B.metadata);
              this.UpdateTimelineMetadata(M),
                this.m_mapTimelineData.delete(b),
                this.FireEvent("OnInvalidate", b);
            }
            RecordingSessionChanged(b) {
              let v = b.session_id,
                M = b.notification_type;
              if (M == Wt.E6.MC) {
                const B = this.m_mapRunningTimelines.get(b.timeline_id);
                if (!B) {
                  this.FireEvent("OnInvalidateRecording", b.timeline_id, v),
                    (0, N.wT)(
                      !1,
                      "Received recording started message before timeline info",
                    );
                  return;
                }
                const F = {
                  recording_id: v,
                  start_offset_ms: b.start_offset,
                  recording_zero_timeline_offset_ms: b.start_offset,
                  duration_ms: b.duration_ms,
                  recording_type: b.recording_type,
                };
                B.m_metadata.recordings.push(F), (B.m_runningRecording = F);
              } else if (M == Wt.E6.wK) {
                const B = this.GetRunningTimelineForRecording(b.timeline_id, v);
                if (!B) return;
                (B.m_runningRecording.duration_ms = b.duration_ms),
                  (B.m_runningRecording = null),
                  this.FireEvent("OnInvalidateRecording", b.timeline_id, v);
              } else if (M == Wt.E6.G6) {
                const B = this.GetTimelineMetadata(b.timeline_id);
                if (B) {
                  const D = B.metadata.recordings.find(
                    (K) => K.recording_id === v,
                  );
                  if (D) {
                    (D.start_offset_ms = b.start_offset),
                      (D.duration_ms = b.duration_ms);
                    const K =
                      parseInt(b.start_offset) + parseInt(b.duration_ms);
                    let W = parseInt(B.metadata.duration_ms) || 0;
                    K > W && (B.metadata.duration_ms = K.toString());
                  }
                }
                this.GetRunningTimelineForRecording(b.timeline_id, v) ||
                  this.FireEvent("OnInvalidateRecording", b.timeline_id, v);
              } else if (M == Wt.E6.qN) {
                const B = this.GetTimelineMetadata(b.timeline_id);
                if (B) {
                  const F = B.metadata.recordings.filter(
                    (D) => D.recording_id !== v,
                  );
                  B.metadata.recordings = F;
                }
              }
              this.FireEvent("OnInvalidate", b.timeline_id);
            }
            GetGlobalTimelineEndMS() {
              const b =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (b) {
                const v = isNaN(parseInt(b.metadata.duration_ms))
                  ? 0
                  : parseInt(b.metadata.duration_ms);
                return (0, $.Sb)(b.nGlobalOffsetMS.valMS + v);
              }
              return (0, $.Sb)(0);
            }
            GetEndOfRecordingsMS() {
              const b =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (b) {
                const v =
                  b.metadata.recordings[b.metadata.recordings.length - 1];
                if (v) {
                  const M = this.m_mapRunningTimelines.has(
                      b.metadata.timeline_id,
                    ),
                    B = isNaN(parseInt(v.start_offset_ms))
                      ? 0
                      : parseInt(v.start_offset_ms),
                    F = isNaN(parseInt(b.metadata.duration_ms))
                      ? 0
                      : parseInt(b.metadata.duration_ms);
                  let D = 0;
                  return (
                    M
                      ? (D = Math.max(0, F - B))
                      : isNaN(parseInt(v.duration_ms)) ||
                        (D = parseInt(v.duration_ms)),
                    (0, $.Sb)(b.nGlobalOffsetMS.valMS + B + D)
                  );
                }
              }
              return null;
            }
            GetTotalRecordingDuration() {
              let b = 0;
              return (
                this.m_rgTimelineMetadata.forEach((v) => {
                  v.metadata.recordings.forEach((M) => {
                    isNaN(parseInt(M.duration_ms)) ||
                      (b = b + parseInt(M.duration_ms));
                  });
                }),
                b
              );
            }
            GetTimelineStartBeforeGlobalZeroMS(b) {
              return b == this.m_rgTimelineMetadata[0].metadata.timeline_id
                ? this.m_ulFirstTimelineOffsetMS
                : 0;
            }
            async GenerateNamePartsFromTimeline(b, v, M, B) {
              let F,
                D = !1,
                K,
                W,
                St,
                vt;
              for (let cr of this.m_rgTimelineMetadata) {
                let jr = !1;
                if (!D) {
                  if (cr.metadata.timeline_id != b) continue;
                  (jr = !0), (D = !0);
                }
                const Ur = cr.metadata.timeline_id == M;
                await this.LoadTimelineData(cr.metadata.timeline_id);
                const li = this.m_mapTimelineData.get(cr.metadata.timeline_id);
                jr && (St = cr.metadata.date_recorded + Math.floor(v / 1e3)),
                  Ur && (vt = cr.metadata.date_recorded + Math.floor(B / 1e3));
                for (let Fr of li.m_rgEntries) {
                  const kr = parseInt(Fr.time);
                  if (
                    (jr && kr < v) ||
                    (Ur && kr > B) ||
                    (!(0, S.eJ)(Fr) && !(0, S.N$)(Fr))
                  )
                    continue;
                  const oi = ur(Fr);
                  (!F || (oi && oi.rank > F.rank)) && (F = oi);
                }
                for (let Fr of li.m_rgStateDescriptions) {
                  const kr = parseInt(Fr.time);
                  (Ur && kr > B) || ((!K || W < kr) && ((K = Fr), (W = kr)));
                }
                if (Ur) break;
              }
              const je = F?.strTitle ?? K?.title,
                er = new k.VS(this.GetGameID()),
                Jr = U.Vw.GetAppInfo(er.GetInternalAppID())?.name;
              return {
                strTimelinePart: je,
                strAppNamePart: Jr,
                rtStart: St,
                rtEnd: vt,
              };
            }
            async GenerateClipNameFromTimeline(b, v, M, B) {
              const { strTimelinePart: F, strAppNamePart: D } =
                  await this.GenerateNamePartsFromTimeline(b, v, M, B),
                K = new Date(),
                W = `${K.getFullYear()}-${(K.getMonth() + 1).toString().padStart(2, "0")}-${K.getDate().toString().padStart(2, "0")} ${K.toLocaleTimeString(_.pf.GetPreferredLocales())}`,
                St = [D, W, F].filter((vt) => !!vt).join(" - ");
              return (0, lt.q_)(`Generated clip name "${St}"`), St;
            }
          };
        gt([R.sH], qt.prototype, "m_bInitialized", 2),
          gt([j.o], qt.prototype, "UpdateRunningTimelines", 1);
        let ie = qt;
        function ur(pt) {
          switch (pt.type) {
            case "event":
              const b = pt;
              return { rank: 5e4 + pt.priority, strTitle: b.title };
            case "usermarker":
              const v = pt;
              return !v.title && !v.description
                ? null
                : {
                    rank: 1e5 + pt.priority,
                    strTitle: pt.title || pt.description,
                  };
            case "state_description":
              return { rank: 4e4, strTitle: pt.title };
            case "achievement":
              return { rank: 9e4, strTitle: pt.title };
          }
          return null;
        }
        function Oe(pt) {
          const b = React.useMemo(() => GetTimelineLoaderForClip(pt), [pt]),
            v = React.useCallback(
              (M) =>
                `https://steamloopback.host/gamerecordings/clips/${pt}/video/${M}/session.mpd`,
              [pt],
            );
          return (
            React.useEffect(() => () => b && b.release(), [b]),
            { loader: b.loader, fnGetManifest: v }
          );
        }
        function ze(pt) {
          const b = React.useMemo(() => GetTimelineLoaderForGame(pt), [pt]),
            v = React.useCallback(
              (M) =>
                `https://steamloopback.host/gamerecordings/video/${M}/session.mpd`,
              [],
            );
          return (
            React.useEffect(() => () => b && b.release(), [b]),
            { loader: b.loader, fnGetManifest: v }
          );
        }
        function ne(pt) {
          if (!Array.isArray(pt.entries)) {
            let b = [];
            pt.entries &&
              typeof pt.entries == "object" &&
              ((b = Object.values(pt.entries)),
              (b = b.filter((v) => v && typeof v == "object" && "time" in v)),
              b.sort((v, M) => parseInt(v.time) - parseInt(M.time))),
              (pt.entries = b);
          }
        }
      },
      84346: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { J: () => Wt });
        var f = x(72609),
          y = x(37901);
        function Wt() {
          return (0, y.A)().languages.map((lt) => zt(lt.strISOCode));
        }
        function zt(lt) {
          return lt.length == 2 && f.TS.COUNTRY ? `${lt}-${f.TS.COUNTRY}` : lt;
        }
      },
      86578: (at, Ge, x) => {
        "use strict";
        x.d(Ge, {
          Hv: () => zt,
          E6: () => Wt,
          $C: () => lt,
          QX: () => y,
          Bw: () => f,
          xM: () => pi,
        });
        var f = {};
        x.r(f),
          x.d(f, {
            P8: () => ze,
            Ey: () => b,
            aI: () => ur,
            BA: () => ie,
            uw: () => pt,
            Fy: () => Oe,
            jL: () => ne,
          });
        var y = {};
        x.r(y),
          x.d(y, {
            sd: () => D,
            dh: () => K,
            Jr: () => W,
            t8: () => St,
            qK: () => B,
            yq: () => F,
          });
        var Wt = {};
        x.r(Wt),
          x.d(Wt, { qN: () => er, MC: () => vt, wK: () => je, G6: () => Er });
        var zt = {};
        x.r(zt), x.d(zt, { W: () => cr, h: () => Jr });
        var lt = {};
        x.r(lt), x.d(lt, { E: () => Ur, v: () => jr });
        var S = x(80613),
          m = x.n(S),
          r = x(75245),
          P = x(35038),
          j = x(66781);
        class $ extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $.prototype.timelines || r.Sg($.M()),
              S.Message.initialize(this, t, 0, -1, [1, 2, 3, 4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $.sm_m ||
                ($.sm_m = {
                  proto: $,
                  fields: {
                    timelines: { n: 1, c: R, r: !0, q: !0 },
                    postgame_events: { n: 2, c: U, r: !0, q: !0 },
                    temporary_clips: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: r.qM.readString,
                      bw: r.gp.writeRepeatedString,
                    },
                    tags: { n: 4, c: _, r: !0, q: !0 },
                  },
                }),
              $.sm_m
            );
          }
          static MBF() {
            return $.sm_mbf || ($.sm_mbf = r.w0($.M())), $.sm_mbf;
          }
          toObject(t = !1) {
            return $.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT($.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq($.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new $();
            return $.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj($.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return $.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0($.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              $.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingFile";
          }
        }
        class G extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              G.prototype.timelines || r.Sg(G.M()),
              S.Message.initialize(this, t, 0, -1, [1, 14, 15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    timelines: { n: 1, c: R, r: !0, q: !0 },
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
                    tags: { n: 14, c: _, r: !0, q: !0 },
                    phases: { n: 15, c: gt, r: !0, q: !0 },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = r.w0(G.M())), G.sm_mbf;
          }
          toObject(t = !1) {
            return G.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(G.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(G.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new G();
            return G.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(G.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return G.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(G.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClipFile";
          }
        }
        class R extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              R.prototype.timeline_id || r.Sg(R.M()),
              S.Message.initialize(this, t, 0, -1, [5, 6, 7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              R.sm_m ||
                (R.sm_m = {
                  proto: R,
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
                    recordings: { n: 5, c: k, r: !0, q: !0 },
                    phases: { n: 6, c: gt, r: !0, q: !0 },
                    significant_events: { n: 7, c: N, r: !0, q: !0 },
                  },
                }),
              R.sm_m
            );
          }
          static MBF() {
            return R.sm_mbf || (R.sm_mbf = r.w0(R.M())), R.sm_mbf;
          }
          toObject(t = !1) {
            return R.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(R.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(R.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new R();
            return R.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(R.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return R.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(R.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              R.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata";
          }
        }
        class k extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.recording_id || r.Sg(k.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
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
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = r.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(k.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new k();
            return k.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(k.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(k.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineMetadata_Recording";
          }
        }
        class U extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              U.prototype.game_id || r.Sg(U.M()),
              S.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    events: { n: 2, c: N, r: !0, q: !0 },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = r.w0(U.M())), U.sm_mbf;
          }
          toObject(t = !1) {
            return U.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(U.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(U.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new U();
            return U.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(U.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return U.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(U.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPostGameSummary";
          }
        }
        class N extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.game_id || r.Sg(N.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
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
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = r.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(N.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new N();
            return N.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(N.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(N.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTimelineEvent";
          }
        }
        class _ extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _.prototype.game_id || r.Sg(_.M()),
              S.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    tag: { n: 2, c: mt },
                    references: { n: 3, c: Y, r: !0, q: !0 },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = r.w0(_.M())), _.sm_mbf;
          }
          toObject(t = !1) {
            return _.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(_.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(_.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new _();
            return _.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(_.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return _.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(_.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag";
          }
        }
        class Y extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Y.prototype.clip_id || r.Sg(Y.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
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
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = r.w0(Y.M())), Y.sm_mbf;
          }
          toObject(t = !1) {
            return Y.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Y.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Y.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Y();
            return Y.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Y.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Y.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTag_Timeline";
          }
        }
        class J extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.timeline_id || r.Sg(J.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
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
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = r.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(J.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new J();
            return J.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(J.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(J.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingTagInstance";
          }
        }
        class gt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.phase_id || r.Sg(gt.M()),
              S.Message.initialize(this, t, 0, -1, [6, 7, 9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
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
                    tags: { n: 6, c: bt, r: !0, q: !0 },
                    contained_tags: { n: 7, c: bt, r: !0, q: !0 },
                    background_timeline_offset: {
                      n: 8,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    attributes: { n: 9, c: dt, r: !0, q: !0 },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = r.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(gt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new gt();
            return gt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(gt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(gt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase";
          }
        }
        class bt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.name || r.Sg(bt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    name: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    group: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = r.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(bt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new bt();
            return bt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(bt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(bt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingPhase_Tag";
          }
        }
        class mt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mt.prototype.name || r.Sg(mt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
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
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = r.w0(mt.M())), mt.sm_mbf;
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(mt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(mt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new mt();
            return mt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(mt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(mt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineTag";
          }
        }
        class dt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              dt.prototype.group || r.Sg(dt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dt.sm_m ||
                (dt.sm_m = {
                  proto: dt,
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
              dt.sm_m
            );
          }
          static MBF() {
            return dt.sm_mbf || (dt.sm_mbf = r.w0(dt.M())), dt.sm_mbf;
          }
          toObject(t = !1) {
            return dt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(dt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(dt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new dt();
            return dt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(dt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(dt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhaseAttribute";
          }
        }
        const qt = 0,
          ie = 1,
          ur = 2,
          Oe = 3,
          ze = 4,
          ne = 5,
          pt = 6,
          b = 7,
          v = 8,
          M = 9,
          B = 1,
          F = 2,
          D = 3,
          K = 4,
          W = 5,
          St = 6,
          vt = 1,
          je = 2,
          er = 3,
          Er = 4,
          Jr = 0,
          cr = 1,
          jr = 0,
          Ur = 1,
          li = 1,
          Fr = 2;
        function kr(I) {
          return "unknown ETimelineEntryType ( " + I + " )";
        }
        function oi(I) {
          return "unknown EPhaseResultType ( " + I + " )";
        }
        function Ps(I) {
          return "unknown ETimelineChangeNotificationType ( " + I + " )";
        }
        function Gi(I) {
          return (
            "unknown ERecordingSessionChangeNotificationType ( " + I + " )"
          );
        }
        function Un(I) {
          return "unknown EDiskSpaceType ( " + I + " )";
        }
        function Hn(I) {
          return "unknown EThumbnailTimePrecision ( " + I + " )";
        }
        function Ws(I) {
          return "unknown EThumbnailFormat ( " + I + " )";
        }
        class Sr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Sr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Sr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Sr();
            return Sr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Request";
          }
        }
        class Jt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.apps || r.Sg(Jt.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: { apps: { n: 1, c: Ze, r: !0, q: !0 } },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = r.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Jt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Jt();
            return Jt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Jt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Jt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response";
          }
        }
        class Ze extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ze.prototype.game_id || r.Sg(Ze.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
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
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = r.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(t = !1) {
            return Ze.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ze.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ze.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ze();
            return Ze.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ze.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ze.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAppsWithBackgroundVideo_Response_App";
          }
        }
        class xe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xe.prototype.game_id || r.Sg(xe.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = r.w0(xe.M())), xe.sm_mbf;
          }
          toObject(t = !1) {
            return xe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(xe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(xe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new xe();
            return xe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(xe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(xe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Request";
          }
        }
        class Pe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pe.prototype.timelines || r.Sg(Pe.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: { timelines: { n: 1, c: R, r: !0, q: !0 } },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = r.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(t = !1) {
            return Pe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Pe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Pe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Pe();
            return Pe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Pe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Pe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForApp_Response";
          }
        }
        class We extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              We.prototype.clip_id || r.Sg(We.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              We.sm_m ||
                (We.sm_m = {
                  proto: We,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              We.sm_m
            );
          }
          static MBF() {
            return We.sm_mbf || (We.sm_mbf = r.w0(We.M())), We.sm_mbf;
          }
          toObject(t = !1) {
            return We.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(We.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(We.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new We();
            return We.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(We.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return We.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(We.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              We.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Request";
          }
        }
        class Ee extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ee.prototype.game_id || r.Sg(Ee.M()),
              S.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ee.sm_m ||
                (Ee.sm_m = {
                  proto: Ee,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    timelines: { n: 2, c: R, r: !0, q: !0 },
                    first_timeline_start_offset_ms: {
                      n: 3,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Ee.sm_m
            );
          }
          static MBF() {
            return Ee.sm_mbf || (Ee.sm_mbf = r.w0(Ee.M())), Ee.sm_mbf;
          }
          toObject(t = !1) {
            return Ee.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ee.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ee.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ee();
            return Ee.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ee.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ee.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTimelinesForClip_Response";
          }
        }
        class Fe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Fe.prototype.page || r.Sg(Fe.M()),
              S.Message.initialize(this, t, 0, -1, [12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
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
                    filter_tags: { n: 12, c: se, r: !0, q: !0 },
                    filter_phase_id: {
                      n: 13,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = r.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(t = !1) {
            return Fe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Fe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Fe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Fe();
            return Fe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Fe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Fe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request";
          }
        }
        class se extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.group || r.Sg(se.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    group: { n: 1, br: r.qM.readString, bw: r.gp.writeString },
                    name: { n: 2, br: r.qM.readString, bw: r.gp.writeString },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = r.w0(se.M())), se.sm_mbf;
          }
          toObject(t = !1) {
            return se.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(se.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(se.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new se();
            return se.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(se.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(se.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Request_Tag";
          }
        }
        class Ut extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.phases || r.Sg(Ut.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    phases: { n: 1, c: qe, r: !0, q: !0 },
                    total_count: {
                      n: 2,
                      br: r.qM.readUint32,
                      bw: r.gp.writeUint32,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = r.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ut.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ut();
            return Ut.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ut.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ut.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response";
          }
        }
        class qe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qe.prototype.game_id || r.Sg(qe.M()),
              S.Message.initialize(
                this,
                t,
                0,
                -1,
                [7, 8, 10, 13, 16, 17],
                null,
              );
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qe.sm_m ||
                (qe.sm_m = {
                  proto: qe,
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
                    tags: { n: 7, c: mt, r: !0, q: !0 },
                    contained_tags: { n: 8, c: mt, r: !0, q: !0 },
                    background_recording: { n: 9, c: Je },
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
                    significant_events: { n: 16, c: le, r: !0, q: !0 },
                    attributes: { n: 17, c: dt, r: !0, q: !0 },
                  },
                }),
              qe.sm_m
            );
          }
          static MBF() {
            return qe.sm_mbf || (qe.sm_mbf = r.w0(qe.M())), qe.sm_mbf;
          }
          toObject(t = !1) {
            return qe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(qe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(qe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new qe();
            return qe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(qe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return qe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(qe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              qe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase";
          }
        }
        class Je extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Je.prototype.timeline_id || r.Sg(Je.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Je.sm_m ||
                (Je.sm_m = {
                  proto: Je,
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
              Je.sm_m
            );
          }
          static MBF() {
            return Je.sm_mbf || (Je.sm_mbf = r.w0(Je.M())), Je.sm_mbf;
          }
          toObject(t = !1) {
            return Je.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Je.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Je.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Je();
            return Je.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Je.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Je.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Je.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Je.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_QueryPhases_Response_Phase_BackgroundRecording";
          }
        }
        class ke extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ke.prototype.game_id || r.Sg(ke.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = r.w0(ke.M())), ke.sm_mbf;
          }
          toObject(t = !1) {
            return ke.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ke.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ke.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ke();
            return ke.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ke.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ke.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Request";
          }
        }
        class De extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              De.prototype.tags || r.Sg(De.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: { tags: { n: 1, c: mt, r: !0, q: !0 } },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = r.w0(De.M())), De.sm_mbf;
          }
          toObject(t = !1) {
            return De.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(De.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(De.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new De();
            return De.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(De.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return De.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(De.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTags_Response";
          }
        }
        class Br extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Br.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Br();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Br();
            return Br.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Request";
          }
        }
        class ae extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.enough_space || r.Sg(ae.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    enough_space: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = r.w0(ae.M())), ae.sm_mbf;
          }
          toObject(t = !1) {
            return ae.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ae.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ae.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ae();
            return ae.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ae.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ae.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetEnoughDiskSpace_Response";
          }
        }
        class gr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return gr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new gr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new gr();
            return gr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Request";
          }
        }
        class Le extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Le.prototype.size || r.Sg(Le.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    size: { n: 1, br: r.qM.readDouble, bw: r.gp.writeDouble },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = r.w0(Le.M())), Le.sm_mbf;
          }
          toObject(t = !1) {
            return Le.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Le.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Le.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Le();
            return Le.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Le.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Le.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Response";
          }
        }
        class Lt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.notification_type || r.Sg(Lt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
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
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = r.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Lt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Lt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Lt();
            return Lt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Lt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Lt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineChanged_Notification";
          }
        }
        class Ne extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ne.prototype.notification_type || r.Sg(Ne.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ne.sm_m ||
                (Ne.sm_m = {
                  proto: Ne,
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
              Ne.sm_m
            );
          }
          static MBF() {
            return Ne.sm_mbf || (Ne.sm_mbf = r.w0(Ne.M())), Ne.sm_mbf;
          }
          toObject(t = !1) {
            return Ne.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ne.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ne.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ne();
            return Ne.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ne.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ne.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_RecordingSessionChanged_Notification";
          }
        }
        class le extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.timeline_id || r.Sg(le.M()),
              S.Message.initialize(this, t, 0, -1, [17, 19], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
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
                    tag: { n: 17, c: mt, r: !0, q: !0 },
                    phase_id: {
                      n: 18,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    attributes: { n: 19, c: dt, r: !0, q: !0 },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = r.w0(le.M())), le.sm_mbf;
          }
          toObject(t = !1) {
            return le.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(le.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(le.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new le();
            return le.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(le.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(le.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CTimelineEntry";
          }
        }
        class ut extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.entry || r.Sg(ut.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
                  fields: {
                    entry: { n: 1, c: le },
                    game_id: {
                      n: 2,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
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
          static toObject(t, s) {
            return r.BT(ut.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ut();
            return ut.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ut.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ut.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryChanged_Notification";
          }
        }
        class ct extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ct.prototype.game_id || r.Sg(ct.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
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
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = r.w0(ct.M())), ct.sm_mbf;
          }
          toObject(t = !1) {
            return ct.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ct.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ct.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ct();
            return ct.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ct.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ct.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TimelineEntryRemoved_Notification";
          }
        }
        class Ht extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Ht();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ht();
            return Ht.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_LowDiskSpace_Notification";
          }
        }
        class Yt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.game_id || r.Sg(Yt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = r.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Yt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Yt();
            return Yt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Yt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Yt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PostGameHighlightsChanged_Notification";
          }
        }
        class Et extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.game_id || r.Sg(Et.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
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
                    phase_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = r.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Et.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Et();
            return Et.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Et.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Et.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToGamePhase_Notification";
          }
        }
        class Ft extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.game_id || r.Sg(Ft.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
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
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = r.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(t = !1) {
            return Ft.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ft.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ft.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ft();
            return Ft.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ft.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ft.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_OpenOverlayToTimelineEvent_Notification";
          }
        }
        class wt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new wt();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new wt();
            return wt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PhaseListChanged_Notification";
          }
        }
        class tt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.clip_id || r.Sg(tt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = r.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(tt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new tt();
            return tt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(tt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(tt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipSummary";
          }
        }
        class kt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.game_id || r.Sg(kt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    start: { n: 2, c: jt },
                    end: { n: 3, c: jt },
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
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = r.w0(kt.M())), kt.sm_mbf;
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(kt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new kt();
            return kt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(kt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(kt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request";
          }
        }
        class jt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.timeline_id || r.Sg(jt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
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
                    offset_ms: {
                      n: 2,
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
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(jt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new jt();
            return jt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(jt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(jt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Request_Position";
          }
        }
        class oe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.summary || r.Sg(oe.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = { proto: oe, fields: { summary: { n: 1, c: tt } } }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = r.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(oe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new oe();
            return oe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(oe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(oe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Response";
          }
        }
        class ue extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ue.prototype.clip_id || r.Sg(ue.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ue.sm_m ||
                (ue.sm_m = {
                  proto: ue,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              ue.sm_m
            );
          }
          static MBF() {
            return ue.sm_mbf || (ue.sm_mbf = r.w0(ue.M())), ue.sm_mbf;
          }
          toObject(t = !1) {
            return ue.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ue.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ue.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ue();
            return ue.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ue.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ue.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Request";
          }
        }
        class fr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return fr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new fr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new fr();
            return fr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteClip_Response";
          }
        }
        class st extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.bitrate_kbps || r.Sg(st.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = r.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(st.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new st();
            return st.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(st.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(st.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Settings";
          }
        }
        class Nt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.clip_id || r.Sg(Nt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
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
                    settings: { n: 3, c: st },
                    use_unique_filename: {
                      n: 4,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = r.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Nt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Nt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Nt();
            return Nt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Nt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Nt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Request";
          }
        }
        class rt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.result || r.Sg(rt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    result: { n: 1, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = r.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(rt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new rt();
            return rt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(rt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(rt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Response";
          }
        }
        class ce extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.clip_id || r.Sg(ce.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    settings: { n: 2, c: st },
                    run_policy_checks: {
                      n: 3,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = r.w0(ce.M())), ce.sm_mbf;
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ce.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ce.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ce();
            return ce.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ce.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ce.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Request";
          }
        }
        class $t extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.estimated_size || r.Sg($t.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    estimated_size: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    settings: { n: 2, c: st },
                    result: { n: 3, br: r.qM.readInt32, bw: r.gp.writeInt32 },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = r.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT($t.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new $t();
            return $t.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj($t.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0($t.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Response";
          }
        }
        class Qt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.game_id || r.Sg(Qt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
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
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = r.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Qt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Qt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Qt();
            return Qt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Qt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Qt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Request";
          }
        }
        class Ct extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.screenshot_id || r.Sg(Ct.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    screenshot_id: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = r.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ct.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ct();
            return Ct.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ct.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ct.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_TakeScreenshot_Response";
          }
        }
        class Gt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.clip_id || r.Sg(Gt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
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
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = r.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Gt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Gt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Gt();
            return Gt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Gt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Gt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Request";
          }
        }
        class fe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.summary || r.Sg(fe.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = { proto: fe, fields: { summary: { n: 1, c: tt } } }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = r.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(fe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new fe();
            return fe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(fe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(fe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Response";
          }
        }
        class me extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.clip_id || r.Sg(me.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = r.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(me.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new me();
            return me.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(me.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(me.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Request";
          }
        }
        class Rt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.zip_path || r.Sg(Rt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    zip_path: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = r.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(t = !1) {
            return Rt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Rt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Rt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Rt();
            return Rt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Rt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Rt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ZipClip_Response";
          }
        }
        class de extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.game_id || r.Sg(de.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
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
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = r.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(de.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new de();
            return de.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(de.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(de.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Request";
          }
        }
        class _t extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.clip || r.Sg(_t.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: { clip: { n: 1, c: tt, r: !0, q: !0 } },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = r.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(_t.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new _t();
            return _t.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(_t.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(_t.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetClips_Response";
          }
        }
        class Ae extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ae.prototype.game_id || r.Sg(Ae.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
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
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = r.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(t = !1) {
            return Ae.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ae.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ae.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ae();
            return Ae.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ae.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ae.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Request";
          }
        }
        class Dt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.events || r.Sg(Dt.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
                  fields: { events: { n: 1, c: N, r: !0, q: !0 } },
                }),
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = r.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Dt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Dt();
            return Dt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Dt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Dt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAndTrimPostGameHighlights_Response";
          }
        }
        class te extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.game_id || r.Sg(te.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    entry: { n: 2, c: le },
                    clip_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = r.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(te.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new te();
            return te.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(te.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(te.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Request";
          }
        }
        class Me extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Me.prototype.entry_id || r.Sg(Me.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Me.sm_m ||
                (Me.sm_m = {
                  proto: Me,
                  fields: {
                    entry_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Me.sm_m
            );
          }
          static MBF() {
            return Me.sm_mbf || (Me.sm_mbf = r.w0(Me.M())), Me.sm_mbf;
          }
          toObject(t = !1) {
            return Me.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Me.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Me.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Me();
            return Me.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Me.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Me.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserAddTimelineEntry_Response";
          }
        }
        class be extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              be.prototype.game_id || r.Sg(be.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                    entry: { n: 2, c: le },
                    clip_id: {
                      n: 3,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = r.w0(be.M())), be.sm_mbf;
          }
          toObject(t = !1) {
            return be.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(be.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(be.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new be();
            return be.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(be.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(be.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Request";
          }
        }
        class Tt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Tt();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Tt();
            return Tt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserUpdateTimelineEntry_Response";
          }
        }
        class At extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.game_id || r.Sg(At.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
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
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = r.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(At.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new At();
            return At.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(At.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(At.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Request";
          }
        }
        class mr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return mr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new mr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new mr();
            return mr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UserRemoveTimelineEntry_Response";
          }
        }
        class ee extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.game_ids || r.Sg(ee.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
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
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = r.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ee.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ee();
            return ee.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ee.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ee.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Request";
          }
        }
        class dr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return dr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new dr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new dr();
            return dr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Response";
          }
        }
        class he extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.folder_path || r.Sg(he.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    folder_path: {
                      n: 1,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                    type: { n: 2, br: r.qM.readEnum, bw: r.gp.writeEnum },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = r.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(he.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new he();
            return he.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(he.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(he.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Request";
          }
        }
        class Kt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Kt.prototype.size || r.Sg(Kt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Kt.sm_m ||
                (Kt.sm_m = {
                  proto: Kt,
                  fields: {
                    size: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Kt.sm_m
            );
          }
          static MBF() {
            return Kt.sm_mbf || (Kt.sm_mbf = r.w0(Kt.M())), Kt.sm_mbf;
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Kt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Kt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Kt();
            return Kt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Kt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Kt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetTotalDiskSpaceUsage_Response";
          }
        }
        class ft extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ft.prototype.recording_id || r.Sg(ft.M()),
              S.Message.initialize(this, t, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ft.sm_m ||
                (ft.sm_m = {
                  proto: ft,
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
                      d: jr,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                    format: {
                      n: 8,
                      d: li,
                      br: r.qM.readEnum,
                      bw: r.gp.writeEnum,
                    },
                  },
                }),
              ft.sm_m
            );
          }
          static MBF() {
            return ft.sm_mbf || (ft.sm_mbf = r.w0(ft.M())), ft.sm_mbf;
          }
          toObject(t = !1) {
            return ft.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ft.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ft.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ft();
            return ft.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ft.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ft.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Request";
          }
        }
        class Vt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.thumbnails || r.Sg(Vt.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: { thumbnails: { n: 1, c: Ke, r: !0, q: !0 } },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = r.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Vt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Vt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Vt();
            return Vt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Vt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Vt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response";
          }
        }
        class Ke extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ke.prototype.image_data || r.Sg(Ke.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
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
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = r.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(t = !1) {
            return Ke.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ke.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ke.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ke();
            return Ke.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ke.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ke.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetThumbnails_Response_Thumbnail";
          }
        }
        class C extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.game_id || r.Sg(C.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = r.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(C.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new C();
            return C.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(C.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(C.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Request";
          }
        }
        class vr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return vr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new vr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new vr();
            return vr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StartRecording_Response";
          }
        }
        class ye extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.game_id || r.Sg(ye.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = r.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ye.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ye();
            return ye.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ye.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ye.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Request";
          }
        }
        class X extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.summary || r.Sg(X.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = { proto: X, fields: { summary: { n: 1, c: tt } } }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = r.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(X.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new X();
            return X.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(X.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(X.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Response";
          }
        }
        class Se extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Se.prototype.game_id || r.Sg(Se.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = r.w0(Se.M())), Se.sm_mbf;
          }
          toObject(t = !1) {
            return Se.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Se.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Se.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Se();
            return Se.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Se.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Se.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Request";
          }
        }
        class ht extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.file_size || r.Sg(ht.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    file_size: {
                      n: 1,
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
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ht.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ht();
            return ht.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ht.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ht.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetRecordingSize_Response";
          }
        }
        class ot extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new ot();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ot();
            return ot.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Request";
          }
        }
        class lr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return lr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new lr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new lr();
            return lr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return lr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              lr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CleanupBackgroundRecordings_Response";
          }
        }
        class Mr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Mr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Mr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Mr();
            return Mr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Mr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Mr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Request";
          }
        }
        class Be extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Be.prototype.per_process_audio_capture || r.Sg(Be.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    per_process_audio_capture: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = r.w0(Be.M())), Be.sm_mbf;
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Be.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Be.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Be();
            return Be.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Be.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Be.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPlatformCapabilities_Response";
          }
        }
        class ge extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.summary || r.Sg(ge.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = { proto: ge, fields: { summary: { n: 1, c: tt } } }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = r.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ge.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ge();
            return ge.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ge.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ge.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipCreated_Notification";
          }
        }
        class ve extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ve.prototype.clip_id || r.Sg(ve.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
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
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = r.w0(ve.M())), ve.sm_mbf;
          }
          toObject(t = !1) {
            return ve.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(ve.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(ve.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new ve();
            return ve.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(ve.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(ve.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipDeleted_Notification";
          }
        }
        class we extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              we.prototype.progress || r.Sg(we.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    progress: { n: 1, br: r.qM.readFloat, bw: r.gp.writeFloat },
                    clip_id: {
                      n: 2,
                      br: r.qM.readString,
                      bw: r.gp.writeString,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = r.w0(we.M())), we.sm_mbf;
          }
          toObject(t = !1) {
            return we.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(we.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(we.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new we();
            return we.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(we.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return we.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(we.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportProgress_Notification";
          }
        }
        class Xe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xe.prototype.gameid || r.Sg(Xe.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xe.sm_m ||
                (Xe.sm_m = {
                  proto: Xe,
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
              Xe.sm_m
            );
          }
          static MBF() {
            return Xe.sm_mbf || (Xe.sm_mbf = r.w0(Xe.M())), Xe.sm_mbf;
          }
          toObject(t = !1) {
            return Xe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Xe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Xe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Xe();
            return Xe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Xe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Xe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_PerGameSettings";
          }
        }
        class br extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return br.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new br();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new br();
            return br.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return br.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Request";
          }
        }
        class re extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.settings || r.Sg(re.M()),
              S.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: { settings: { n: 1, c: Xe, r: !0, q: !0 } },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = r.w0(re.M())), re.sm_mbf;
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(re.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new re();
            return re.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(re.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(re.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetPerGameSettings_Response";
          }
        }
        class Zt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.game_settings || r.Sg(Zt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
                  fields: { game_settings: { n: 1, c: Xe } },
                }),
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = r.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Zt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Zt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Zt();
            return Zt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Zt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Zt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Request";
          }
        }
        class hr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return hr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new hr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new hr();
            return hr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SetPerGameSettings_Response";
          }
        }
        class Te extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Te.prototype.gameid || r.Sg(Te.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    gameid: {
                      n: 1,
                      br: r.qM.readFixed64String,
                      bw: r.gp.writeFixed64String,
                    },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = r.w0(Te.M())), Te.sm_mbf;
          }
          toObject(t = !1) {
            return Te.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Te.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Te.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Te();
            return Te.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Te.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Te.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Request";
          }
        }
        class yr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return yr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new yr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new yr();
            return yr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeletePerGameSettings_Response";
          }
        }
        class Ue extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ue.prototype.progress || r.Sg(Ue.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
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
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = r.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(t = !1) {
            return Ue.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Ue.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Ue.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ue();
            return Ue.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Ue.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Ue.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadProgress_Notification";
          }
        }
        class pe extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.game_id || r.Sg(pe.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    game_id: {
                      n: 1,
                      br: r.qM.readUint64String,
                      bw: r.gp.writeUint64String,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = r.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(pe.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new pe();
            return pe.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(pe.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(pe.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Request";
          }
        }
        class rr extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return rr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new rr();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new rr();
            return rr.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SwitchBackgroundRecordingGame_Response";
          }
        }
        class Ye extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Ye.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Ye();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Ye();
            return Ye.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Request";
          }
        }
        class Xt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.is_h265_enabled || r.Sg(Xt.M()),
              S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    is_h265_enabled: {
                      n: 1,
                      br: r.qM.readBool,
                      bw: r.gp.writeBool,
                    },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = r.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, s) {
            return r.BT(Xt.M(), t, s);
          }
          static fromObject(t) {
            return r.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new Xt();
            return Xt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return r.zj(Xt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            r.i0(Xt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetState_Response";
          }
        }
        class xt extends S.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), S.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new xt();
          }
          static deserializeBinary(t) {
            let s = new (m().BinaryReader)(t),
              p = new xt();
            return xt.deserializeBinaryFromReader(p, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (m().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (m().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StateChanged_Notification";
          }
        }
        var pi;
        ((I) => {
          I.GetAppsWithBackgroundVideoHandler = {
            name: "GameRecording.GetAppsWithBackgroundVideo#1",
            request: Sr,
            response: Jt,
          };
          function t(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, P.I8)(Sr, T),
                    Jt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetAppsWithBackgroundVideo = t;
          function s(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, P.I8)(Sr, T),
                    Jt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetAppsWithBackgroundVideo = s),
            (I.GetTimelinesForAppHandler = {
              name: "GameRecording.GetTimelinesForApp#1",
              request: xe,
              response: Pe,
            });
          function p(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, P.I8)(xe, T),
                    Pe,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetTimelinesForApp = p;
          function Yr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTimelinesForApp#1",
                    (0, P.I8)(xe, T),
                    Pe,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetTimelinesForApp = Yr),
            (I.GetTimelinesForClipHandler = {
              name: "GameRecording.GetTimelinesForClip#1",
              request: We,
              response: Ee,
            });
          function Ii(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, P.I8)(We, T),
                    Ee,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetTimelinesForClip = Ii;
          function Oi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTimelinesForClip#1",
                    (0, P.I8)(We, T),
                    Ee,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetTimelinesForClip = Oi),
            (I.QueryPhasesHandler = {
              name: "GameRecording.QueryPhases#1",
              request: Fe,
              response: Ut,
            });
          function zi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, P.I8)(Fe, T),
                    Ut,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.QueryPhases = zi;
          function Qr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.QueryPhases#1",
                    (0, P.I8)(Fe, T),
                    Ut,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgQueryPhases = Qr),
            (I.GetTagsHandler = {
              name: "GameRecording.GetTags#1",
              request: ke,
              response: De,
            });
          function Hr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetTags#1", (0, P.I8)(ke, T), De, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          I.GetTags = Hr;
          function ji(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetTags#1", (0, P.I8)(ke, T), De, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (I.SendMsgGetTags = ji),
            (I.GetEnoughDiskSpaceHandler = {
              name: "GameRecording.GetEnoughDiskSpace#1",
              request: Br,
              response: ae,
            });
          function Ri(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, P.I8)(Br, T),
                    ae,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetEnoughDiskSpace = Ri;
          function $n(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, P.I8)(Br, T),
                    ae,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetEnoughDiskSpace = $n),
            (I.GetAvailableDiskSpaceHandler = {
              name: "GameRecording.GetAvailableDiskSpace#1",
              request: gr,
              response: Le,
            });
          function Kn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, P.I8)(gr, T),
                    Le,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetAvailableDiskSpace = Kn;
          function Vn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, P.I8)(gr, T),
                    Le,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetAvailableDiskSpace = Vn),
            (I.SaveClipHandler = {
              name: "GameRecording.SaveClip#1",
              request: kt,
              response: oe,
            });
          function Zn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.SaveClip#1", (0, P.I8)(kt, T), oe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          I.SaveClip = Zn;
          function xi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.SaveClip#1", (0, P.I8)(kt, T), oe, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (I.SendMsgSaveClip = xi),
            (I.DeleteClipHandler = {
              name: "GameRecording.DeleteClip#1",
              request: ue,
              response: fr,
            });
          function Pi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, P.I8)(ue, T),
                    fr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.DeleteClip = Pi;
          function qn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.DeleteClip#1",
                    (0, P.I8)(ue, T),
                    fr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgDeleteClip = qn),
            (I.GetClipsHandler = {
              name: "GameRecording.GetClips#1",
              request: de,
              response: _t,
            });
          function _i(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetClips#1", (0, P.I8)(de, T), _t, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          I.GetClips = _i;
          function tn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetClips#1", (0, P.I8)(de, T), _t, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (I.SendMsgGetClips = tn),
            (I.UploadClipToSteamHandler = {
              name: "GameRecording.UploadClipToSteam#1",
              request: Gt,
              response: fe,
            });
          function Re(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, P.I8)(Gt, T),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.UploadClipToSteam = Re;
          function ui(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UploadClipToSteam#1",
                    (0, P.I8)(Gt, T),
                    fe,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgUploadClipToSteam = ui),
            (I.ExportClipHandler = {
              name: "GameRecording.ExportClip#1",
              request: Nt,
              response: rt,
            });
          function en(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, P.I8)(Nt, T),
                    rt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.ExportClip = en;
          function rn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ExportClip#1",
                    (0, P.I8)(Nt, T),
                    rt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgExportClip = rn),
            (I.ExportClipPreviewHandler = {
              name: "GameRecording.ExportClipPreview#1",
              request: ce,
              response: $t,
            });
          function He(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, P.I8)(ce, T),
                    $t,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.ExportClipPreview = He;
          function nn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ExportClipPreview#1",
                    (0, P.I8)(ce, T),
                    $t,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgExportClipPreview = nn),
            (I.TakeScreenshotHandler = {
              name: "GameRecording.TakeScreenshot#1",
              request: Qt,
              response: Ct,
            });
          function Wi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, P.I8)(Qt, T),
                    Ct,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.TakeScreenshot = Wi;
          function sn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.TakeScreenshot#1",
                    (0, P.I8)(Qt, T),
                    Ct,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgTakeScreenshot = sn),
            (I.ZipClipHandler = {
              name: "GameRecording.ZipClip#1",
              request: me,
              response: Rt,
            });
          function an(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.ZipClip#1", (0, P.I8)(me, T), Rt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          I.ZipClip = an;
          function $r(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.ZipClip#1", (0, P.I8)(me, T), Rt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (I.SendMsgZipClip = $r),
            (I.StartRecordingHandler = {
              name: "GameRecording.StartRecording#1",
              request: C,
              response: vr,
            });
          function Qe(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, P.I8)(C, T),
                    vr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.StartRecording = Qe;
          function ln(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.StartRecording#1",
                    (0, P.I8)(C, T),
                    vr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgStartRecording = ln),
            (I.StopRecordingHandler = {
              name: "GameRecording.StopRecording#1",
              request: ye,
              response: X,
            });
          function Ie(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, P.I8)(ye, T),
                    X,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.StopRecording = Ie;
          function Ei(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.StopRecording#1",
                    (0, P.I8)(ye, T),
                    X,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgStopRecording = Ei),
            (I.GetBackgroundRecordingFileSizeHandler = {
              name: "GameRecording.GetBackgroundRecordingFileSize#1",
              request: Se,
              response: ht,
            });
          function on(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, P.I8)(Se, T),
                    ht,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetBackgroundRecordingFileSize = on;
          function un(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, P.I8)(Se, T),
                    ht,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetBackgroundRecordingFileSize = un),
            (I.CleanupBackgroundRecordingsHandler = {
              name: "GameRecording.CleanupBackgroundRecordings#1",
              request: ot,
              response: lr,
            });
          function cn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, P.I8)(ot, T),
                    lr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.CleanupBackgroundRecordings = cn;
          function yt(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, P.I8)(ot, T),
                    lr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgCleanupBackgroundRecordings = yt),
            (I.GetAndTrimPostGameHighlightsHandler = {
              name: "GameRecording.GetAndTrimPostGameHighlights#1",
              request: Ae,
              response: Dt,
            });
          function q(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, P.I8)(Ae, T),
                    Dt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetAndTrimPostGameHighlights = q;
          function Pt(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, P.I8)(Ae, T),
                    Dt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetAndTrimPostGameHighlights = Pt),
            (I.GetThumbnailsHandler = {
              name: "GameRecording.GetThumbnails#1",
              request: ft,
              response: Vt,
            });
          function Fi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, P.I8)(ft, T),
                    Vt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetThumbnails = Fi;
          function Jn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetThumbnails#1",
                    (0, P.I8)(ft, T),
                    Vt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetThumbnails = Jn),
            (I.GetPlatformCapabilitiesHandler = {
              name: "GameRecording.GetPlatformCapabilities#1",
              request: Mr,
              response: Be,
            });
          function xr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, P.I8)(Mr, T),
                    Be,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetPlatformCapabilities = xr;
          function Yn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, P.I8)(Mr, T),
                    Be,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetPlatformCapabilities = Yn),
            (I.NotifyTimelineChangedHandler = {
              name: "GameRecording.NotifyTimelineChanged#1",
              request: Lt,
            });
          function Nr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyTimelineChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyTimelineChanged = Nr;
          function fn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, P.I8)(Lt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyTimelineChanged = fn;
          function mn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, P.I8)(Lt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyTimelineChanged = mn),
            (I.NotifyRecordingSessionChangedHandler = {
              name: "GameRecording.NotifyRecordingSessionChanged#1",
              request: Ne,
            });
          function Cr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyRecordingSessionChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyRecordingSessionChanged = Cr;
          function dn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, P.I8)(Ne, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyRecordingSessionChanged = dn;
          function Qn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, P.I8)(Ne, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyRecordingSessionChanged = Qn),
            (I.NotifyTimelineEntryChangedHandler = {
              name: "GameRecording.NotifyTimelineEntryChanged#1",
              request: ut,
            });
          function Cn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyTimelineEntryChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyTimelineEntryChanged = Cn;
          function ci(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, P.I8)(ut, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyTimelineEntryChanged = ci;
          function fi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, P.I8)(ut, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyTimelineEntryChanged = fi),
            (I.NotifyTimelineEntryRemovedHandler = {
              name: "GameRecording.NotifyTimelineEntryRemoved#1",
              request: ct,
            });
          function Gn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyTimelineEntryRemovedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyTimelineEntryRemoved = Gn;
          function Mn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, P.I8)(ct, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyTimelineEntryRemoved = Mn;
          function ki(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, P.I8)(ct, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyTimelineEntryRemoved = ki),
            (I.NotifyClipCreatedHandler = {
              name: "GameRecording.NotifyClipCreated#1",
              request: ge,
            });
          function mi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyClipCreatedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyClipCreated = mi;
          function bn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, P.I8)(ge, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyClipCreated = bn;
          function Rn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, P.I8)(ge, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyClipCreated = Rn),
            (I.NotifyClipDeletedHandler = {
              name: "GameRecording.NotifyClipDeleted#1",
              request: ve,
            });
          function hn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyClipDeletedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyClipDeleted = hn;
          function _n(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, P.I8)(ve, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyClipDeleted = _n;
          function Di(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, P.I8)(ve, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyClipDeleted = Di),
            (I.NotifyExportProgressHandler = {
              name: "GameRecording.NotifyExportProgress#1",
              request: we,
            });
          function ts(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyExportProgressHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyExportProgress = ts;
          function yn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, P.I8)(we, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyExportProgress = yn;
          function es(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, P.I8)(we, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyExportProgress = es),
            (I.NotifyUploadProgressHandler = {
              name: "GameRecording.NotifyUploadProgress#1",
              request: Ue,
            });
          function Li(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyUploadProgressHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyUploadProgress = Li;
          function rs(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, P.I8)(Ue, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyUploadProgress = rs;
          function Sn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, P.I8)(Ue, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyUploadProgress = Sn),
            (I.NotifyLowDiskSpaceHandler = {
              name: "GameRecording.NotifyLowDiskSpace#1",
              request: Ht,
            });
          function wr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyLowDiskSpaceHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyLowDiskSpace = wr;
          function Bn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, P.I8)(Ht, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyLowDiskSpace = Bn;
          function Ni(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, P.I8)(Ht, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyLowDiskSpace = Ni),
            (I.NotifyPostGameHighlightsChangedHandler = {
              name: "GameRecording.NotifyPostGameHighlightsChanged#1",
              request: Yt,
            });
          function gn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyPostGameHighlightsChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyPostGameHighlightsChanged = gn;
          function Dr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, P.I8)(Yt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyPostGameHighlightsChanged = Dr;
          function Gr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, P.I8)(Yt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyPostGameHighlightsChanged = Gr),
            (I.NotifyOpenOverlayToGamePhaseHandler = {
              name: "GameRecording.NotifyOpenOverlayToGamePhase#1",
              request: Et,
            });
          function di(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyOpenOverlayToGamePhaseHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyOpenOverlayToGamePhase = di;
          function Ai(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, P.I8)(Et, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyOpenOverlayToGamePhase = Ai;
          function Mi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, P.I8)(Et, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyOpenOverlayToGamePhase = Mi),
            (I.NotifyOpenOverlayToTimelineEventHandler = {
              name: "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
              request: Ft,
            });
          function Xi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyOpenOverlayToTimelineEventHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyOpenOverlayToTimelineEvent = Xi;
          function bi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, P.I8)(Ft, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyOpenOverlayToTimelineEvent = bi;
          function Ui(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, P.I8)(Ft, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyOpenOverlayToTimelineEvent = Ui),
            (I.NotifyPhaseListChangedHandler = {
              name: "GameRecording.NotifyPhaseListChanged#1",
              request: wt,
            });
          function vn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyPhaseListChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyPhaseListChanged = vn;
          function wn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, P.I8)(wt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyPhaseListChanged = wn;
          function Tn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, P.I8)(wt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgNotifyPhaseListChanged = Tn),
            (I.GetPerGameSettingsHandler = {
              name: "GameRecording.GetPerGameSettings#1",
              request: br,
              response: re,
            });
          function Hi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, P.I8)(br, T),
                    re,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetPerGameSettings = Hi;
          function It(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetPerGameSettings#1",
                    (0, P.I8)(br, T),
                    re,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetPerGameSettings = It),
            (I.SetPerGameSettingsHandler = {
              name: "GameRecording.SetPerGameSettings#1",
              request: Zt,
              response: hr,
            });
          function pn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, P.I8)(Zt, T),
                    hr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.SetPerGameSettings = pn;
          function Rr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.SetPerGameSettings#1",
                    (0, P.I8)(Zt, T),
                    hr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgSetPerGameSettings = Rr),
            (I.DeletePerGameSettingsHandler = {
              name: "GameRecording.DeletePerGameSettings#1",
              request: Te,
              response: yr,
            });
          function Lr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, P.I8)(Te, T),
                    yr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.DeletePerGameSettings = Lr;
          function hi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.DeletePerGameSettings#1",
                    (0, P.I8)(Te, T),
                    yr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgDeletePerGameSettings = hi),
            (I.UserAddTimelineEntryHandler = {
              name: "GameRecording.UserAddTimelineEntry#1",
              request: te,
              response: Me,
            });
          function is(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, P.I8)(te, T),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.UserAddTimelineEntry = is;
          function ns(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, P.I8)(te, T),
                    Me,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgUserAddTimelineEntry = ns),
            (I.UserUpdateTimelineEntryHandler = {
              name: "GameRecording.UserUpdateTimelineEntry#1",
              request: be,
              response: Tt,
            });
          function $i(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, P.I8)(be, T),
                    Tt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.UserUpdateTimelineEntry = $i;
          function In(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, P.I8)(be, T),
                    Tt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgUserUpdateTimelineEntry = In),
            (I.UserRemoveTimelineEntryHandler = {
              name: "GameRecording.UserRemoveTimelineEntry#1",
              request: At,
              response: mr,
            });
          function Pr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, P.I8)(At, T),
                    mr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.UserRemoveTimelineEntry = Pr;
          function ss(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, P.I8)(At, T),
                    mr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgUserRemoveTimelineEntry = ss),
            (I.ManuallyDeleteRecordingsForAppsHandler = {
              name: "GameRecording.ManuallyDeleteRecordingsForApps#1",
              request: ee,
              response: dr,
            });
          function yi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, P.I8)(ee, T),
                    dr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.ManuallyDeleteRecordingsForApps = yi;
          function On(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, P.I8)(ee, T),
                    dr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgManuallyDeleteRecordingsForApps = On),
            (I.GetTotalDiskSpaceUsageHandler = {
              name: "GameRecording.GetTotalDiskSpaceUsage#1",
              request: he,
              response: Kt,
            });
          function zn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, P.I8)(he, T),
                    Kt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.GetTotalDiskSpaceUsage = zn;
          function Ki(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, P.I8)(he, T),
                    Kt,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgGetTotalDiskSpaceUsage = Ki),
            (I.SwitchBackgroundRecordingGameHandler = {
              name: "GameRecording.SwitchBackgroundRecordingGame#1",
              request: pe,
              response: rr,
            });
          function Vi(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, P.I8)(pe, T),
                    rr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.SwitchBackgroundRecordingGame = Vi;
          function Wr(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg(
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, P.I8)(pe, T),
                    rr,
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          (I.SendMsgSwitchBackgroundRecordingGame = Wr),
            (I.GetStateHandler = {
              name: "GameRecording.GetState#1",
              request: Ye,
              response: Xt,
            });
          function jn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetState#1", (0, P.I8)(Ye, T), Xt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          I.GetState = jn;
          function Si(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? new Promise((Q, E) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      E(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : l.SendMsg("GameRecording.GetState#1", (0, P.I8)(Ye, T), Xt, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (I.SendMsgGetState = Si),
            (I.NotifyStateChangedHandler = {
              name: "GameRecording.NotifyStateChanged#1",
              request: xt,
            });
          function xn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultHandlerRegistry()),
              l == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : l.RegisterServiceNotificationHandler(
                    I.NotifyStateChangedHandler,
                    T,
                  )
            );
          }
          I.RegisterForNotifyStateChanged = xn;
          function Pn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, P.I8)(xt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.NotifyStateChanged = Pn;
          function Wn(T, l) {
            return (
              (l = l || (0, j.OI)().GetDefaultTransport()),
              l == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : l.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, P.I8)(xt, T),
                    { ePrivilege: 1, eClientExecutionSite: 1 },
                  )
            );
          }
          I.SendMsgNotifyStateChanged = Wn;
        })(pi || (pi = {}));
      },
      34843: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { VS: () => lt });
        var f = x(38506),
          y = x(99412),
          Wt = x(67529),
          zt = x(71742);
        class lt {
          m_ulGameID;
          constructor(P, j, $) {
            if (typeof P == "string") this.m_ulGameID = f.A.fromString(P, !0);
            else {
              const G = $,
                R = ((P & 255) << 24) + (j & 16777215);
              this.m_ulGameID = f.A.fromBits(R, G, !0);
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
            return this.GetType() === y.Rhn.k_EGameIDTypeApp;
          }
          BIsShortcut() {
            return this.GetType() === y.Rhn.k_EGameIDTypeShortcut;
          }
          BIsMod() {
            return this.GetType() === y.Rhn.k_EGameIDTypeGameMod;
          }
          GetInternalAppID() {
            return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
          }
          BIsValid() {
            switch (this.GetType()) {
              case y.Rhn.k_EGameIDTypeApp:
                return this.GetAppID() !== Wt.sc;
              case y.Rhn.k_EGameIDTypeGameMod:
                return (
                  this.GetAppID() !== Wt.sc &&
                  (this.GetModID() & 2147483648) != 0
                );
              case y.Rhn.k_EGameIDTypeShortcut:
                return (this.GetModID() & 2147483648) != 0;
              default:
                return (
                  (0, zt.wT)(!1, `Unknown GameID type: ${this.GetType()}`), !1
                );
            }
          }
          static InitFromAppID(P) {
            return new lt(y.Rhn.k_EGameIDTypeApp, P, 0);
          }
          static InitFromShortcutID(P) {
            return new lt(y.Rhn.k_EGameIDTypeShortcut, 0, P);
          }
        }
        function S(r) {
          return lt.InitFromAppID(r).ConvertTo64BitString();
        }
        function m(r) {
          return lt.InitFromShortcutID(r).ConvertTo64BitString();
        }
      },
      95987: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { y: () => R });
        var f = x(35038),
          y = x(21196),
          Wt = x(57589),
          zt = x(36174),
          lt = x(27066),
          S = Object.defineProperty,
          m = Object.getOwnPropertyDescriptor,
          r = (k, U, N, _) => {
            for (
              var Y = _ > 1 ? void 0 : _ ? m(U, N) : U, J = k.length - 1, gt;
              J >= 0;
              J--
            )
              (gt = k[J]) && (Y = (_ ? gt(U, N, Y) : gt(Y)) || Y);
            return _ && Y && S(U, N, Y), Y;
          };
        const P = new Wt.wd("ReactUsageReporting").Debug,
          j = 100,
          $ = zt.Kp.PerMinute * 1e3;
        class G {
          m_strProduct;
          m_strVersion;
          m_transport = null;
          m_mapRoutes = new Map();
          m_mapComponents = new Map();
          m_mapActions = new Map();
          m_reportCount = 0;
          m_bInitialized = !1;
          Init(U, N, _) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = U),
              (this.m_strVersion = N),
              (this.m_transport = _),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), $);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(U, N) {
            N.has(U) || N.set(U, 0),
              N.set(U, N.get(U) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(U) {
            P("Route match: " + U), this.ReportInternal(U, this.m_mapRoutes);
          }
          ReportTrackedComponent(U) {
            P("Tracked component: " + U),
              this.ReportInternal(U, this.m_mapComponents);
          }
          ReportTrackedAction(U) {
            P("User action: " + U), this.ReportInternal(U, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= j;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const U = f.w.Init(y.bc);
            U.Body().set_product(this.m_strProduct),
              U.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((N, _) => {
                let Y = new y.N4();
                Y.set_route(_), Y.set_count(N), U.Body().add_routes(Y);
              }),
              this.m_mapComponents.forEach((N, _) => {
                let Y = new y.Zd();
                Y.set_component(_), Y.set_count(N), U.Body().add_components(Y);
              }),
              this.m_mapActions.forEach((N, _) => {
                let Y = new y.Ys();
                Y.set_action(_), Y.set_count(N), U.Body().add_actions(Y);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              y._5.ReportReactUsage(this.m_transport, U);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        r([lt.o], G.prototype, "CheckSend", 1);
        const R = new G();
      },
      19730: (at, Ge, x) => {
        "use strict";
        x.d(Ge, { Dq: () => lt, dm: () => zt });
        var f = x(84346),
          y = x(39905);
        function Wt(m, r) {
          const P = r.bUseBinary1K ? 1024 : 1e3,
            j = P * P,
            $ = j * P,
            G = $ * P;
          return m > G
            ? { nNum: m / G, strPrefix: "Tera" }
            : m > $
              ? { nNum: m / $, strPrefix: "Giga" }
              : m > j
                ? { nNum: m / j, strPrefix: "Mega" }
                : m > P
                  ? { nNum: m / P, strPrefix: "Kilo" }
                  : { nNum: m, strPrefix: "" };
        }
        function zt(m, r, P, j) {
          let $ = r;
          typeof $ == "number"
            ? ($ = {
                nDigitsAfterDecimal: r,
                bUseBinary1K: P || P === void 0,
                bValueIsInBytes: !j,
                bValueIsRate: j,
                nMinimumDigitsAfterDecimal: 0,
              })
            : ($ = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ...$,
              });
          const { nNum: G, strPrefix: R } = Wt(m, $),
            k = `#${R}${$.bValueIsInBytes ? "bytes" : "bits"}${$.bValueIsRate ? "_PerSecond" : ""}`;
          return y.Z.Localize(
            k,
            G.toLocaleString((0, f.J)(), {
              minimumFractionDigits: $.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: $.nDigitsAfterDecimal,
            }),
          );
        }
        function lt(m, r = 0) {
          let P;
          return (
            r && (P = { maximumFractionDigits: r }),
            m ? m.toLocaleString((0, f.J)(), P) : "" + m
          );
        }
        function S(m) {
          return m > 1e9
            ? Math.trunc(m / 1e9).toString() + "B"
            : m > 1e6
              ? Math.trunc(m / 1e6).toString() + "M"
              : m > 1e3
                ? Math.trunc(m / 1e3).toString() + "K"
                : m.toString();
        }
      },
      42577: (at) => {
        at.exports = {
          ClipDetails: "_3OZdTvCTb6CpiavJuyAgSs",
          VideoContainer: "_10C-FSg2FYguFXDoPyD78V",
        };
      },
      95896: (at) => {
        at.exports = {
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
      64919: (at) => {
        at.exports = {
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
      35009: (at) => {
        at.exports = {
          GoLiveButtonCtn: "_1Ssh6bcQcBm8T6zVNU48G2",
          GoLiveButton: "_1rZeqdwHzajXNoY-uxRgfW",
          IsLive: "_2MGnyLAWN4c3di_W6U3YWJ",
          JumpToEndIcon: "_2FkWFO_BAQnsWrQr-nHvEz",
        };
      },
      36890: (at) => {
        at.exports = {
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
      76970: (at) => {
        at.exports = {
          animationDuration: "2000ms",
          RelativeTimeContainer: "UqMNRsT0TZjlt-9HTNH--",
          RelativeTime: "_3waN_JrfZ-gXKzfJxcuQcf",
          fadeInOut: "_1Tmc5_ehH_tlNlyTxyfSr5",
        };
      },
      99550: (at) => {
        at.exports = {
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
      7450: (at) => {
        at.exports = { MouseListenerContainer: "_1t81JirfhcUdp7F73SUzQF" };
      },
      8959: (at) => {
        at.exports = {
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
      59254: (at) => {
        at.exports = {
          TimelineBacking: "_18sxaBKg910kJmmJS3zaaE",
          TimeTick: "faIAh3Zzg4MdulktB1IFo",
          TickLine: "iLLznzt7Npcsc-y_9tyCc",
          Major: "walQuMqIA1KE3_0tchqYj",
          Minor: "_2I5yeKjfnjaPmRNIpHUrl1",
        };
      },
      10564: (at) => {
        at.exports = {
          ClipDecorator: "_3EWp_eWXsvKB-Lwz-Afl0S",
          gradient: "_3vAWnjV6c5oyReAPoGg-Ln",
        };
      },
      28361: (at) => {
        at.exports = {
          TimelineRelativeDate: "xYXziACgvkSwOnjGsjrll",
          Overlay: "c1Fn5e_N42Q5Oz4gyqRvL",
        };
      },
      53298: (at) => {
        at.exports = {
          GameModeMarker: "_XZRbjOovnp3-oJB1FHsX",
          Playing: "_1QXuDX8p22dW30Dq7Q4cY1",
          Staging: "_5elfnsld99d9XPrRSVVMb",
          Menus: "_2ouy5ehbuCra9zvvJVRt7N",
          Unspecified: "_3tV_P5UlKOy23ovyof9BCG",
          GameModeMarkerClip: "_2X0XBzWywYh06tLOpEVVhV",
        };
      },
      41972: (at) => {
        at.exports = {
          HighlightContextMenuItem: "_28S8ry9bxlwML-iCsdsuB",
          MenuItem: "JZCa05wXidmR0BEW4wKuT",
          EditMarker: "sMTceKd747vq8bsuL3OW9",
          CreateClip: "_1xK5Up775-kzkarHJyaUSH",
          DeleteMarker: "_1HITbDUgqbAsnVISlw-IU4",
          ViewScreenshot: "_2HfiRMT1mpZZy-Op04_Vp5",
          ViewClip: "_20E0pQUHwdjs6eM1Ow2GiS",
        };
      },
      23533: (at) => {
        at.exports = {
          MarkerAndDropline: "KxkV7ibv4HxiLzsJDo09y",
          Faded: "_2YIhgvCldNrTquf5YdDweU",
          NoPointer: "_2ebcCpkh2QhQIrtDjawNTL",
          TimelineMarkerCtn: "_1Dg_c4LTkbyiG_03VDAsQE",
          TimelineMarker: "_2CNnKSqRD_9z5U0Knq2yjM",
          DroplineCtn: "_2KKJRZF-_QAqfpR0e-20x6",
          TimelineMarkerDropLine: "_3JsMmXCkE-NhKNzxarPwuc",
          RangeSelector: "_3Kw_btjCsTccf081ReOvQp",
        };
      },
      62745: (at) => {
        at.exports = {
          Positioner: "r5C4vqop5qm8LQK3X0ko3",
          MouseWithin: "ew9abErxuaHlGCMzkyeWJ",
          Highlight: "xk10sVHcF-iepUcNGM7xL",
          PhaseHighlight: "_2sP2GHDIcIT3HmoJT5xGlA",
          Body: "_1hlTgJwbrd9u_brCsEsT0N",
          Edge: "_3_tErLe8CNqRhYf0vAfb-t",
        };
      },
      5540: (at) => {
        at.exports = {
          thumbnailWidth: "320",
          PlayHead: "NAXFU_K2NP9xmH2cnITpG",
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
      14296: (at) => {
        at.exports = { RangeHighlight: "_2a4wDhcnXixHXxFFvpLGbe" };
      },
      2508: (at) => {
        at.exports = {
          thumbnailWidth: "320",
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
      78760: (at) => {
        at.exports = {
          RecordingDecorator: "_24zNSxRiQlHxbGT_RvZsoY",
          Clip: "_3Q-H1_vR-NtTfQf_Ohljdx",
          ClipMode: "_7MCqjcHde47TGpwTMEK5",
          Manual: "_1kfoF8deRCDIcTe5l3oplt",
          RecordingDecoratorClip: "_3d4VU3BdaG9Z5sL2fNq_xy",
          LiveRecordingBuffer: "_3PHrI-zb5iHRj5OfLEwEc0",
          IsLive: "_1kxbPOC7CK5DmZi9fZLfUl",
        };
      },
      36616: (at) => {
        at.exports = {
          thumbnailWidth: "320",
          PlayHead: "_3knz_EuOFUYwJ-8OisxbLi",
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
      48419: (at) => {
        at.exports = {
          thumbnailWidth: "320",
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
      54637: (at) => {
        at.exports = {
          TimelineContextMenuItem: "_1_VGcqhwscnT-kPnPb2c22",
          MenuItem: "_1wPm9-zsQlqLzb92eR77lC",
          AddUserMarker: "_3VSFddY_9-Sh1I3ByUwmD4",
          TakeScreenshot: "_13th0aVaGQhNp6eltjFYyh",
          StartEndClip: "_1eb1crSvl4J1Ie12OvhHUz",
          ViewClip: "_3YpMycJiNuGZOe9A5ddrxL",
          ClipPhase: "_3BLSZg3UyXhaQ4rkXaTvhs",
        };
      },
      2596: (at) => {
        at.exports = {
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
        };
      },
    },
  ]);
})();

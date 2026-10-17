(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [7462],
    {
      11995: (X) => {
        X.exports = { ClipUploadStatus: "_3rMEP_IbC30BRuQuHY6F1E" };
      },
      25025: (X) => {
        X.exports = {
          ClipDetails: "_1fyr-hKRG1lR-7oPJ_rqmG",
          VideoContainer: "_1Ml8-TqxakKRFRAYwvdq4Y",
          ClipPreview: "_3vpFgujAo8vFRf6bAtHCEO",
          Thumbnail: "_3PnGnLoEMy4dXaT5j3EWN0",
          PlayContainer: "_1Cv16KKO1tKy2jnOykai5-",
          Button: "MwGjy194NChFEI20JTHao",
        };
      },
      27082: (X, k, l) => {
        "use strict";
        l.r(k), l.d(k, { default: () => t });
        var F = l(62540),
          $ = l(63696),
          D = l(40326),
          U = l(97724),
          H = l(48635),
          q = l(94601),
          S = l(1345),
          p = l(50777),
          g = l(7727),
          n = l(11995),
          s = l.n(n);
        function t(f) {
          const { clipToUpload: B, finishUpload: z } = f,
            [u, w] = $.useState(!1),
            [j, c] = $.useState(),
            { fnUploadClip: b } = (0, U.Sm)(),
            [v, M] = $.useState();
          if (!B) return null;
          const W = async () => {
            w(!0);
            const { eResult: J, strURL: e } = await b(B.clip_id, "", "", q.wY0);
            z(e), w(!1);
          };
          return (0, F.jsxs)("div", {
            className: n.ClipUploadStatus,
            children: [
              (0, F.jsx)(H.d, { clipID: B.clip_id }),
              !u && (0, F.jsx)(p.$n, { onClick: W, children: "Upload" }),
              u && (0, F.jsx)(Y, { clipToUpload: B }),
            ],
          });
        }
        function Y(f) {
          const { clipToUpload: B } = f,
            [z, u] = $.useState(),
            [w, j] = $.useState();
          $.useEffect(
            () =>
              D.xM.RegisterForNotifyUploadProgress(
                (M) => (
                  typeof M.Body().eresult() > "u"
                    ? u(M.Body().progress() * 100)
                    : u(void 0),
                  S.R
                ),
              ).unregister,
            [],
          );
          let c = (0, g.we)("#Chat_Uploading", B.clip_id),
            b = { width: z + "%" };
          return (0, F.jsxs)("div", {
            className: "chatFileUploadProgressContainer",
            children: [
              (0, F.jsx)("div", {
                className: "chatFileUploadProgressName",
                children: c,
              }),
              (0, F.jsx)("div", {
                className:
                  "chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
                children: (0, F.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: b,
                }),
              }),
            ],
          });
        }
      },
      62625: (X, k, l) => {
        "use strict";
        l.r(k),
          l.d(k, {
            default: () => tr,
            useTimelineLoaderForCommunityClip: () => G,
          });
        var F = l(62540),
          $ = l(63696),
          D = l(60869),
          U = l(97724),
          H = l(26888),
          q = l(45233),
          S = l(19698),
          p = l(60925),
          g = l(61416),
          n = l(58663),
          s = l.n(n),
          t = l(67480),
          Y = l(98237);
        class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.representation_name || t.Sg(f.M()),
              n.Message.initialize(this, r, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    representation_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    horizontal_resolution: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    vertical_resolution: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    frame_rate: {
                      n: 5,
                      br: t.qM.readDouble,
                      bw: t.gp.writeDouble,
                    },
                    bandwidth: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    audio_sample_rate: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    frame_rate_string: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    codec: { n: 9, br: t.qM.readString, bw: t.gp.writeString },
                    audio_channel_config: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    segment_info: { n: 11, c: u, r: !0, q: !0 },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = t.w0(f.M())), f.sm_mbf;
          }
          toObject(r = !1) {
            return f.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(f.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(f.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new f();
            return f.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(f.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return f.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(f.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingRepresentation";
          }
        }
        class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              B.prototype.component_name || t.Sg(B.M()),
              n.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    component_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    contents: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    segment_size: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    file_type: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    representations: { n: 5, c: f, r: !0, q: !0 },
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
          static toObject(r, i) {
            return t.BT(B.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(B.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new B();
            return B.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(B.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return B.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(B.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingComponent";
          }
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.steamid || t.Sg(z.M()),
              n.Message.initialize(this, r, 0, -1, [7], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_segments: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    segment_duration_timescale: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    segment_duration: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    components: { n: 7, c: B, r: !0, q: !0 },
                    start_time_ms: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_offset_in_timeline_ms: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
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
          static toObject(r, i) {
            return t.BT(z.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(z.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new z();
            return z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(z.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(z.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CMsgVideoGameRecordingDef";
          }
        }
        class u extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              u.prototype.segment_number || t.Sg(u.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              u.sm_m ||
                (u.sm_m = {
                  proto: u,
                  fields: {
                    segment_number: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    segment_size_bytes: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    component_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    representation_name: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              u.sm_m
            );
          }
          static MBF() {
            return u.sm_mbf || (u.sm_mbf = t.w0(u.M())), u.sm_mbf;
          }
          toObject(r = !1) {
            return u.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(u.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(u.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new u();
            return u.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(u.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return u.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(u.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              u.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentInfo";
          }
        }
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.segment_info || t.Sg(w.M()),
              n.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    segment_info: { n: 1, c: u },
                    url_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    url_path: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    use_https: { n: 4, br: t.qM.readBool, bw: t.gp.writeBool },
                    request_headers: { n: 5, c: j, r: !0, q: !0 },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(r = !1) {
            return w.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(w.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(w.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new w();
            return w.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(w.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return w.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(w.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo";
          }
        }
        class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.name || t.Sg(j.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(r = !1) {
            return j.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(j.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(j.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new j();
            return j.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(j.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return j.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(j.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
          }
        }
        class c extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.video_manager_clip_id || t.Sg(c.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    video_manager_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    video_manager_video_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    server_timeline_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    manifest_url: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    duration_ms: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_offset_ms: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = t.w0(c.M())), c.sm_mbf;
          }
          toObject(r = !1) {
            return c.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(c.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(c.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new c();
            return c.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(c.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return c.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(c.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideoManagerClipID";
          }
        }
        class b extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              b.prototype.clip_id || t.Sg(b.M()),
              n.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    date_recorded: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_file_size_bytes: {
                      n: 7,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_ids: { n: 9, c, r: !0, q: !0 },
                    owner_steamid: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_complete: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration_ms: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = t.w0(b.M())), b.sm_mbf;
          }
          toObject(r = !1) {
            return b.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(b.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(b.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new b();
            return b.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(b.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return b.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(b.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingClip";
          }
        }
        class v extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              v.prototype.clip || t.Sg(v.M()),
              n.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    clip: { n: 2, c: b },
                    video_def: { n: 3, c: z, r: !0, q: !0 },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = t.w0(v.M())), v.sm_mbf;
          }
          toObject(r = !1) {
            return v.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(v.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(v.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new v();
            return v.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(v.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return v.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(v.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Request";
          }
        }
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.clip || t.Sg(M.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = { proto: M, fields: { clip: { n: 1, c: b } } }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = t.w0(M.M())), M.sm_mbf;
          }
          toObject(r = !1) {
            return M.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(M.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(M.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new M();
            return M.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(M.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return M.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(M.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_CreateShareClip_Response";
          }
        }
        class W extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              W.prototype.clip_id || t.Sg(W.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              W.sm_m ||
                (W.sm_m = {
                  proto: W,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
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
          static toObject(r, i) {
            return t.BT(W.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(W.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new W();
            return W.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(W.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return W.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(W.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              W.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Request";
          }
        }
        class J extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return J.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new J();
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new J();
            return J.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return J.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Response";
          }
        }
        class e extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.clip_id || t.Sg(e.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = t.w0(e.M())), e.sm_mbf;
          }
          toObject(r = !1) {
            return e.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(e.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(e.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new e();
            return e.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(e.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return e.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(e.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Request";
          }
        }
        class O extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              O.prototype.clip || t.Sg(O.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = { proto: O, fields: { clip: { n: 1, c: b } } }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = t.w0(O.M())), O.sm_mbf;
          }
          toObject(r = !1) {
            return O.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(O.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(O.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new O();
            return O.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(O.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return O.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(O.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetSingleSharedClip_Response";
          }
        }
        class E extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              E.prototype.recording_id || t.Sg(E.M()),
              n.Message.initialize(this, r, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              E.sm_m ||
                (E.sm_m = {
                  proto: E,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    component_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    representation_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    segments_to_store: { n: 4, c: u, r: !0, q: !0 },
                  },
                }),
              E.sm_m
            );
          }
          static MBF() {
            return E.sm_mbf || (E.sm_mbf = t.w0(E.M())), E.sm_mbf;
          }
          toObject(r = !1) {
            return E.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(E.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(E.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new E();
            return E.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(E.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return E.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(E.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              E.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Request";
          }
        }
        class T extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              T.prototype.segments_needed || t.Sg(T.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    segments_needed: { n: 1, c: w, r: !0, q: !0 },
                    call_again: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = t.w0(T.M())), T.sm_mbf;
          }
          toObject(r = !1) {
            return T.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(T.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(T.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new T();
            return T.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(T.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return T.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(T.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Response";
          }
        }
        class P extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              P.prototype.recording_id || t.Sg(P.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              P.sm_m ||
                (P.sm_m = {
                  proto: P,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    component_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    representation_name: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    first_segment_number: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_segments: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_result: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              P.sm_m
            );
          }
          static MBF() {
            return P.sm_mbf || (P.sm_mbf = t.w0(P.M())), P.sm_mbf;
          }
          toObject(r = !1) {
            return P.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(P.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(P.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new P();
            return P.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(P.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return P.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(P.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              P.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Request";
          }
        }
        class Q extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Q.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Q();
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new Q();
            return Q.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_CommitGameRecordingSegmentsUpload_Response";
          }
        }
        class x extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              x.prototype.recording_id || t.Sg(x.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
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
          static toObject(r, i) {
            return t.BT(x.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(x.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new x();
            return x.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(x.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return x.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(x.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
          }
        }
        class h extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.segments_needed || t.Sg(h.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: { segments_needed: { n: 1, c: w, r: !0, q: !0 } },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = t.w0(h.M())), h.sm_mbf;
          }
          toObject(r = !1) {
            return h.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(h.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(h.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new h();
            return h.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(h.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return h.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(h.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
          }
        }
        class m extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.recording_id || t.Sg(m.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    segments_uploaded: { n: 2, c: u, r: !0, q: !0 },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = t.w0(m.M())), m.sm_mbf;
          }
          toObject(r = !1) {
            return m.toObject(r, this);
          }
          static toObject(r, i) {
            return t.BT(m.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(m.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new m();
            return m.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(m.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return m.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(m.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Request";
          }
        }
        class Z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Z.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Z();
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new Z();
            return Z.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return Z.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              Z.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingCommitSegmentUploads_Response";
          }
        }
        var V;
        ((y) => {
          function r(K, L, A) {
            return K.SendMsg(
              "GameRecordingClip.CreateShareClip#1",
              (0, Y.I8)(v, L, A),
              M,
              { ePrivilege: 1 },
            );
          }
          y.CreateShareClip = r;
          function i(K, L, A) {
            return K.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, Y.I8)(W, L, A),
              J,
              { ePrivilege: 1 },
            );
          }
          y.DeleteSharedClip = i;
          function a(K, L, A) {
            return K.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, Y.I8)(e, L, A),
              O,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          y.GetSingleSharedClip = a;
        })(V || (V = {}));
        var d;
        ((y) => {
          function r(L, A, N) {
            return L.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, Y.I8)(E, A, N),
              T,
              { ePrivilege: 1 },
            );
          }
          y.BeginGameRecordingSegmentsUpload = r;
          function i(L, A, N) {
            return L.SendMsg(
              "VideoClip.CommitGameRecordingSegmentsUpload#1",
              (0, Y.I8)(P, A, N),
              Q,
              { ePrivilege: 1 },
            );
          }
          y.CommitGameRecordingSegmentsUpload = i;
          function a(L, A, N) {
            return L.SendMsg(
              "VideoClip.GetNextBatchOfSegmentsToUpload#1",
              (0, Y.I8)(x, A, N),
              h,
              { ePrivilege: 1 },
            );
          }
          y.GetNextBatchOfSegmentsToUpload = a;
          function K(L, A, N) {
            return L.SendMsg(
              "VideoClip.CommitSegmentUploads#1",
              (0, Y.I8)(m, A, N),
              Z,
              { ePrivilege: 1 },
            );
          }
          y.CommitSegmentUploads = K;
        })(d || (d = {}));
        var R = l(1345),
          o = l(51026),
          I = l(25025),
          C = l(69385);
        function _(y) {
          const { previewURL: r } = y,
            [i, a] = $.useState(!1);
          if (i) return (0, F.jsx)(rr, { ...y });
          const K = () => {
            a(!0);
          };
          return (0, F.jsxs)("div", {
            className: I.ClipPreview,
            onClick: K,
            children: [
              (0, F.jsx)("img", { className: I.Thumbnail, src: r }),
              (0, F.jsx)("div", {
                className: I.PlayContainer,
                children: (0, F.jsx)(C.Play, { className: I.Button }),
              }),
            ],
          });
        }
        function rr(y) {
          const { clipID: r } = y,
            i = sr(r);
          return i.data
            ? (0, F.jsx)(ar, { clip: i.data, mode: D.g_.ChatClip })
            : (0, F.jsx)("div", {
                style: { color: "white" },
                children: "Loading...",
              });
        }
        const tr = _;
        function ir(y, r) {
          return {
            timeline_id: r.server_timeline_id,
            game_id: y.clip_id,
            date_recorded: y.date_recorded,
            duration_ms: y.duration_ms.toFixed(0),
            recordings: [],
          };
        }
        function sr(y) {
          const r = (0, p.KV)();
          return (0, g.I)({
            queryKey: ["grclip", y],
            queryFn: async () => {
              const i = Y.w.Init(e);
              i.Body().set_clip_id(y);
              const a = await V.GetSingleSharedClip(r, i);
              if (a.GetEResult() != R.R)
                throw (
                  ((0, o.ZI)("GetSingleSharedClip failed"),
                  a.DEBUG_LogToConsole(),
                  new Error(
                    `Failed to load clip with result: ${a.GetEResult()}`,
                  ))
                );
              let K = a.Body().toObject().clip,
                L = [];
              if (K.video_ids.length == 0)
                throw (
                  ((0, o.ZI)("No video ids in clip", y),
                  a.DEBUG_LogToConsole(),
                  new Error("No video ids in clip"))
                );
              let A;
              for (let N of K.video_ids)
                (!A || A.timeline_id != N.server_timeline_id) &&
                  ((A = ir(K, N)), L.push(A)),
                  A.recordings.push({
                    recording_id: N.video_manager_video_id,
                    start_offset_ms: N.start_offset_ms.toFixed(0),
                    duration_ms: N.duration_ms.toFixed(0),
                    recording_type: S.kO,
                    cdn_manifest_url: N.manifest_url,
                  });
              return { clip_id: K.clip_id, game_id: K.gameid, timelines: L };
            },
          });
        }
        function G(y) {
          const r = $.useMemo(() => (0, U.pw)(y), [y]),
            i = $.useCallback(
              (a) => {
                for (const K of y.timelines)
                  for (const L of K.recordings)
                    if (L.recording_id == a) return L.cdn_manifest_url;
              },
              [y],
            );
          return (
            $.useEffect(() => () => r && r.release(), [r]),
            { loader: r.loader, fnGetManifest: i }
          );
        }
        function ar(y) {
          const { clip: r, mode: i } = y,
            { loader: a, fnGetManifest: K } = G(r);
          return (0, F.jsx)(F.Fragment, {
            children: (0, F.jsx)(D.Ni, {
              loader: a,
              fnGetManifest: K,
              mode: i,
              children: (0, F.jsxs)("div", {
                className: I.ClipDetails,
                children: [
                  (0, F.jsx)("div", {
                    className: I.VideoContainer,
                    children: (0, F.jsx)(H.J, {
                      positionAbsolute: !1,
                      autoPlay: i != D.g_.ChatClip,
                    }),
                  }),
                  (0, F.jsx)(q.h, { loader: a }),
                ],
              }),
            }),
          });
        }
      },
    },
  ]);
})();
//# sourceMappingURL=file:///home/buildbot/buildslave/npm-coordinator-rel-steamui/build/client/steamui/sourcemaps/gamerecording.js.map

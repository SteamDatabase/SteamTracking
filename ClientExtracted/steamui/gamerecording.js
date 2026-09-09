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
        l.r(k), l.d(k, { default: () => J });
        var v = l(62540),
          $ = l(63696),
          D = l(40326),
          U = l(97724),
          H = l(48635),
          q = l(94601),
          S = l(1345),
          p = l(50777),
          g = l(7727),
          n = l(11995),
          s = l.n(n),
          t = "10978408";
        function J(w) {
          const { clipToUpload: B, finishUpload: f } = w,
            [u, y] = $.useState(!1),
            [e, V] = $.useState(),
            { fnUploadClip: M } = (0, U.Sm)(),
            [z, c] = $.useState();
          if (!B) return null;
          const j = async () => {
            y(!0);
            const { eResult: W, strURL: Y } = await M(B.clip_id, "", "", q.wY0);
            f(Y), y(!1);
          };
          return (0, v.jsxs)("div", {
            className: n.ClipUploadStatus,
            children: [
              (0, v.jsx)(H.d, { clipID: B.clip_id }),
              !u && (0, v.jsx)(p.$n, { onClick: j, children: "Upload" }),
              u && (0, v.jsx)(o, { clipToUpload: B }),
            ],
          });
        }
        function o(w) {
          const { clipToUpload: B } = w,
            [f, u] = $.useState(),
            [y, e] = $.useState();
          $.useEffect(
            () =>
              D.xM.RegisterForNotifyUploadProgress(
                (c) => (
                  typeof c.Body().eresult() > "u"
                    ? u(c.Body().progress() * 100)
                    : u(void 0),
                  S.R
                ),
              ).unregister,
            [],
          );
          let V = (0, g.we)("#Chat_Uploading", B.clip_id),
            M = { width: f + "%" };
          return (0, v.jsxs)("div", {
            className: "chatFileUploadProgressContainer",
            children: [
              (0, v.jsx)("div", {
                className: "chatFileUploadProgressName",
                children: V,
              }),
              (0, v.jsx)("div", {
                className:
                  "chatFileUploadProgressBarContainer DialogProgressBar_ProgressBarContainer",
                children: (0, v.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: M,
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
            default: () => sr,
            useTimelineLoaderForCommunityClip: () => C,
          });
        var v = l(62540),
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
          J = l(98237),
          o = "10978408";
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              w.prototype.representation_name || t.Sg(w.M()),
              n.Message.initialize(this, r, 0, -1, [11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
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
                    representations: { n: 5, c: w, r: !0, q: !0 },
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
        class f extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              f.prototype.steamid || t.Sg(f.M()),
              n.Message.initialize(this, r, 0, -1, [7], null);
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
        class y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              y.prototype.segment_info || t.Sg(y.M()),
              n.Message.initialize(this, r, 0, -1, [5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
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
                    request_headers: { n: 5, c: e, r: !0, q: !0 },
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
          static toObject(r, i) {
            return t.BT(y.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(y.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new y();
            return y.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(y.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(y.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo";
          }
        }
        class e extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              e.prototype.name || t.Sg(e.M()),
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
                    name: { n: 1, br: t.qM.readString, bw: t.gp.writeString },
                    value: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
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
            return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
          }
        }
        var V = "10978408";
        class M extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              M.prototype.video_manager_clip_id || t.Sg(M.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
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
            return "CVideoManagerClipID";
          }
        }
        class z extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              z.prototype.clip_id || t.Sg(z.M()),
              n.Message.initialize(this, r, 0, -1, [9], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
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
                    video_ids: { n: 9, c: M, r: !0, q: !0 },
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
            return "CGameRecordingClip";
          }
        }
        class c extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              c.prototype.clip || t.Sg(c.M()),
              n.Message.initialize(this, r, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    clip: { n: 2, c: z },
                    video_def: { n: 3, c: f, r: !0, q: !0 },
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
            return "CGameRecording_CreateShareClip_Request";
          }
        }
        class j extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              j.prototype.clip || t.Sg(j.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = { proto: j, fields: { clip: { n: 1, c: z } } }),
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
        class Y extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(), n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          toObject(r = !1) {
            return Y.toObject(r, this);
          }
          static toObject(r, i) {
            return r ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(r) {
            return new Y();
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new Y();
            return Y.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return r;
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {}
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, r), r.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_DeleteSharedClip_Response";
          }
        }
        class F extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              F.prototype.clip_id || t.Sg(F.M()),
              n.Message.initialize(this, r, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    clip_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
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
          static toObject(r, i) {
            return t.BT(F.M(), r, i);
          }
          static fromObject(r) {
            return t.Uq(F.M(), r);
          }
          static deserializeBinary(r) {
            let i = new (s().BinaryReader)(r),
              a = new F();
            return F.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(r, i) {
            return t.zj(F.MBF(), r, i);
          }
          serializeBinary() {
            var r = new (s().BinaryWriter)();
            return F.serializeBinaryToWriter(this, r), r.getResultBuffer();
          }
          static serializeBinaryToWriter(r, i) {
            t.i0(F.M(), r, i);
          }
          serializeBase64String() {
            var r = new (s().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, r), r.getResultBase64String()
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
                (O.sm_m = { proto: O, fields: { clip: { n: 1, c: z } } }),
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
                    segments_needed: { n: 1, c: y, r: !0, q: !0 },
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
        class m extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              m.prototype.segments_needed || t.Sg(m.M()),
              n.Message.initialize(this, r, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: { segments_needed: { n: 1, c: y, r: !0, q: !0 } },
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
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
          }
        }
        class h extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(r = null) {
            super(),
              h.prototype.recording_id || t.Sg(h.M()),
              n.Message.initialize(this, r, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    recording_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    segments_uploaded: { n: 2, c: u, r: !0, q: !0 },
                  },
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
        var d;
        ((b) => {
          function r(L, A, K) {
            return L.SendMsg(
              "GameRecordingClip.CreateShareClip#1",
              (0, J.I8)(c, A, K),
              j,
              { ePrivilege: 1 },
            );
          }
          b.CreateShareClip = r;
          function i(L, A, K) {
            return L.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, J.I8)(W, A, K),
              Y,
              { ePrivilege: 1 },
            );
          }
          b.DeleteSharedClip = i;
          function a(L, A, K) {
            return L.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, J.I8)(F, A, K),
              O,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          b.GetSingleSharedClip = a;
        })(d || (d = {}));
        var G;
        ((b) => {
          function r(A, K, N) {
            return A.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, J.I8)(E, K, N),
              T,
              { ePrivilege: 1 },
            );
          }
          b.BeginGameRecordingSegmentsUpload = r;
          function i(A, K, N) {
            return A.SendMsg(
              "VideoClip.CommitGameRecordingSegmentsUpload#1",
              (0, J.I8)(P, K, N),
              Q,
              { ePrivilege: 1 },
            );
          }
          b.CommitGameRecordingSegmentsUpload = i;
          function a(A, K, N) {
            return A.SendMsg(
              "VideoClip.GetNextBatchOfSegmentsToUpload#1",
              (0, J.I8)(x, K, N),
              m,
              { ePrivilege: 1 },
            );
          }
          b.GetNextBatchOfSegmentsToUpload = a;
          function L(A, K, N) {
            return A.SendMsg(
              "VideoClip.CommitSegmentUploads#1",
              (0, J.I8)(h, K, N),
              Z,
              { ePrivilege: 1 },
            );
          }
          b.CommitSegmentUploads = L;
        })(G || (G = {}));
        var _ = l(1345),
          R = l(51026),
          I = l(25025),
          rr = l(69385),
          ur = "10978408";
        function tr(b) {
          const { previewURL: r } = b,
            [i, a] = $.useState(!1);
          if (i) return (0, v.jsx)(ir, { ...b });
          const L = () => {
            a(!0);
          };
          return (0, v.jsxs)("div", {
            className: I.ClipPreview,
            onClick: L,
            children: [
              (0, v.jsx)("img", { className: I.Thumbnail, src: r }),
              (0, v.jsx)("div", {
                className: I.PlayContainer,
                children: (0, v.jsx)(rr.Play, { className: I.Button }),
              }),
            ],
          });
        }
        function ir(b) {
          const { clipID: r } = b,
            i = nr(r);
          return i.data
            ? (0, v.jsx)(lr, { clip: i.data, mode: D.g_.ChatClip })
            : (0, v.jsx)("div", {
                style: { color: "white" },
                children: "Loading...",
              });
        }
        const sr = tr;
        function ar(b, r) {
          return {
            timeline_id: r.server_timeline_id,
            game_id: b.clip_id,
            date_recorded: b.date_recorded,
            duration_ms: b.duration_ms.toFixed(0),
            recordings: [],
          };
        }
        function nr(b) {
          const r = (0, p.KV)();
          return (0, g.I)({
            queryKey: ["grclip", b],
            queryFn: async () => {
              const i = J.w.Init(F);
              i.Body().set_clip_id(b);
              const a = await d.GetSingleSharedClip(r, i);
              if (a.GetEResult() != _.R)
                throw (
                  ((0, R.ZI)("GetSingleSharedClip failed"),
                  a.DEBUG_LogToConsole(),
                  new Error(
                    `Failed to load clip with result: ${a.GetEResult()}`,
                  ))
                );
              let L = a.Body().toObject().clip,
                A = [];
              if (L.video_ids.length == 0)
                throw (
                  ((0, R.ZI)("No video ids in clip", b),
                  a.DEBUG_LogToConsole(),
                  new Error("No video ids in clip"))
                );
              let K;
              for (let N of L.video_ids)
                (!K || K.timeline_id != N.server_timeline_id) &&
                  ((K = ar(L, N)), A.push(K)),
                  K.recordings.push({
                    recording_id: N.video_manager_video_id,
                    start_offset_ms: N.start_offset_ms.toFixed(0),
                    duration_ms: N.duration_ms.toFixed(0),
                    recording_type: S.kO,
                    cdn_manifest_url: N.manifest_url,
                  });
              return { clip_id: L.clip_id, game_id: L.gameid, timelines: A };
            },
          });
        }
        function C(b) {
          const r = $.useMemo(() => (0, U.pw)(b), [b]),
            i = $.useCallback(
              (a) => {
                for (const L of b.timelines)
                  for (const A of L.recordings)
                    if (A.recording_id == a) return A.cdn_manifest_url;
              },
              [b],
            );
          return (
            $.useEffect(() => () => r && r.release(), [r]),
            { loader: r.loader, fnGetManifest: i }
          );
        }
        function lr(b) {
          const { clip: r, mode: i } = b,
            { loader: a, fnGetManifest: L } = C(r);
          return (0, v.jsx)(v.Fragment, {
            children: (0, v.jsx)(D.Ni, {
              loader: a,
              fnGetManifest: L,
              mode: i,
              children: (0, v.jsxs)("div", {
                className: I.ClipDetails,
                children: [
                  (0, v.jsx)("div", {
                    className: I.VideoContainer,
                    children: (0, v.jsx)(H.J, {
                      positionAbsolute: !1,
                      autoPlay: i != D.g_.ChatClip,
                    }),
                  }),
                  (0, v.jsx)(q.h, { loader: a }),
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
